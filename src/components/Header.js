import {useEffect} from "react";
import * as THREE from 'three'
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import {ShaderPass} from "three/addons/postprocessing/ShaderPass";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import styles from '@/styles/Header.module.scss';
import hexRgb from 'hex-rgb';

export function Header() {

    useEffect(() => {
        // CREATION FUNCTIONS
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function rgb(hex) {
            let rgb = hexRgb(hex);
            return new THREE.Vector3(rgb['red'], rgb['green'], rgb['blue']);
        }


        var randomisePosition = new THREE.Vector2(1, 5);
        let sNoise = `    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 5.0 * fract(p * C.www) - 1.0; // (6.0) MAKES SUPER FUCKY
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }`
        let shader = new THREE.ShaderMaterial({
            uniforms: {
                u_bgMain: {type: 'v3', value: rgb('#E36279')},
                u_bg: {type: 'v3', value: rgb('#3380D6')},
                u_color1: {type: 'v3', value: rgb('#8f6be3')},
                u_color2: {type: 'v3', value: rgb('#8f6be3')},
                u_time: {type: 'f', value: 0},
                u_randomisePosition: { type: 'v2', value: randomisePosition }
            },
            fragmentShader: sNoise + `    
    vec3 rgb(float r, float g, float b) {
        return vec3(r / 255., g / 255., b / 255.);
    }
    vec3 rgb(float c) {
        return vec3(c / 255., c / 255., c / 255.);
    }

    uniform vec3 u_bg;
    uniform vec3 u_bgMain;
    uniform vec3 u_color1;
    uniform vec3 u_color2;
    uniform float u_time;

    varying vec2 vUv;
    varying float vDistortion;

    void main() {
        vec3 bg = rgb(u_bg.r, u_bg.g, u_bg.b);
        vec3 c1 = rgb(u_color1.r, u_color1.g, u_color1.b);
        vec3 c2 = rgb(u_color2.r, u_color2.g, u_color2.b);
        vec3 bgMain = rgb(u_bgMain.r, u_bgMain.g, u_bgMain.b);

        float noise1 = snoise(vUv + u_time * 0.08);
        float noise2 = snoise(vUv * 2. + u_time * 0.1);

        vec3 color = bg;
        color = mix(color, c1, noise1 * 0.6);
        color = mix(color, c2, noise2 * .4);
        color = mix(color, mix(c1, c2, vUv.x), vDistortion);

        float border = smoothstep(0.1, 0.2, vUv.x);

        color = mix(color, bgMain, 1. -border);

        gl_FragColor = vec4(color, 1.0);
    }`,
            vertexShader: sNoise + `    uniform float u_time;
    uniform vec2 u_randomisePosition;

    varying float vDistortion;
    varying float xDistortion;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vDistortion = snoise(vUv.xx * 1. - u_randomisePosition * 0.15);
        xDistortion = snoise(vUv.yy * 1. - u_randomisePosition * 0.05);
        vec3 pos = position;
        pos.z += (vDistortion * 1.);
        pos.x += (xDistortion * 1.);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }`,
        });

        // noise generation
        let counter = 0.0;
        let noiseShader = new THREE.ShaderMaterial({
            uniforms: {
                tDiffuse: { value: null},
                amount: { value: counter}
            },
            fragmentShader: `
                  uniform float amount;
      uniform sampler2D tDiffuse;
      varying vec2 vUv;

      float random( vec2 p )
      {
      vec2 K1 = vec2(
      23.14069263277926, // e^pi (Gelfond's constant)
      2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
      );
      return fract( cos( dot(p,K1) ) * 12345.6789 );
      }

      void main() {
      vec4 color = texture2D( tDiffuse, vUv );
      vec2 uvRandom = vUv;
      uvRandom.y *= random(vec2(uvRandom.y,amount));
      color.rgb += random(uvRandom)*0.1;
      gl_FragColor = vec4( color );
      }
            `,
            vertexShader: `
                          varying vec2 vUv;
              void main() {
              vUv = uv;
              gl_Position = projectionMatrix
              * modelViewMatrix
              * vec4( position, 1.0 );
              }
            `
        });

        // Setup
        const renderer = new THREE.WebGLRenderer();

        // get size of the container and use it for scene sizing
        let container = document.getElementById('canvas-container');


        renderer.setSize(window.innerWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // set the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        let vCheck = false;
        camera.position.z = 5;
        let geometry = new THREE.PlaneGeometry(window.innerWidth / 2, 400, 100, 100);
        let mesh = new THREE.Mesh(geometry, shader);
        let randNumX = randomInteger(-200, 200);
        let randNumY = randomInteger(1, 500);
        mesh.position.set(randNumX, randNumY, -280);
        mesh.scale.multiplyScalar(4);
        mesh.rotationX = -1.0;
        mesh.rotationY = 0.0;
        mesh.rotationZ = 0.1;
        scene.add(mesh);

        let renderPass = new RenderPass( scene, camera );
        let noisePass = new ShaderPass( noiseShader );
        noisePass.renderToScreen = true;


        const composer = new EffectComposer( renderer );
        composer.addPass( renderPass );
        composer.addPass( noisePass );

        // render
        composer.render()
        let t = randomInteger(0, 10000);
        let j = randomInteger(0, 10000);;
        let x = randomInteger(0, 32);
        let y = randomInteger(0, 32);
        // Update the scene
        const animate = function () {
            noiseShader.uniforms.amount.value = counter;
            requestAnimationFrame( animate );
            composer.render();
            mesh.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j);


            mesh.material.uniforms.u_time.value = t;
            if(t % 0.1 == 0) {
                if(vCheck == false) {
                    x -= 1;
                    if(x <= 0) {
                        vCheck = true;
                    }
                } else {
                    x += 1;
                    if(x >= 32) {
                        vCheck = false;
                    }

                }
            }

            // Increase t by a certain value every frame
            j = j + 0.001;
            t = t + 0.009;
        };
        animate();

        window.addEventListener('resize', onResize)
        function onResize () {
            let container = document.getElementById('canvas-container');
            renderer.setSize(window.innerWidth, container.offsetHeight)
        }
        return () => {
            window.removeEventListener('resize', onResize)
        }

    }, [])

    return (
        <div id="canvas-container" className={styles.anim}>
        </div>
    )
}
