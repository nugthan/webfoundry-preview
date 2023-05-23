import React, {useEffect, useRef, useState} from 'react';
import styles from '@/styles/Canvas.module.scss'
import classNames from "classnames";

const Canvas = ({isHovered, image}) => {
    const canvasRef = useRef(null);

    const [images, setImages] = useState([]);
    const [maskImages, setMaskImages] = useState([]);

    const initialState = 1;
    const [maskIndex, setMaskIndex] = useState(initialState);
    const [frameIndex, setFrameIndex] = useState(initialState);

    function preloadImages() {
        for (let i = 0; i < 20; i++) {
            let img = new Image();
            img.src = `/macbook/${i+1}.png`;
            setImages((prevImages) => [...prevImages, img]);
        }
    }
    function preloadMaskImages() {
        for (let i = 0; i < 20; i++) {
            setMaskImages((prevImages) => [...prevImages, `url('/mask/${i+1}.png')`]);
        }
    }

    useEffect(() => {
        let intervalId;

        function updateIndex(increment) {
            // Need to fix this so this only updates the value if it gets incremented
            setFrameIndex(prevIndex => {
                const newIndex = prevIndex + increment;
                if (newIndex >= 0 && newIndex < 19) {
                    setFrameIndex(newIndex);
                    setMaskIndex(newIndex);
                    return newIndex;
                } else {
                    clearInterval(intervalId);
                    return prevIndex;
                }
            });
        }

        if (isHovered) {
            intervalId = setInterval(() => updateIndex(-1), 23);
        } else {
            intervalId = setInterval(() => updateIndex(1), 23);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isHovered]);
    const renderCanvas = () => {
        const context = canvasRef.current.getContext('2d');
    }

    useEffect(() => {
        preloadImages();
        preloadMaskImages();
        renderCanvas();
    }, []);

    useEffect(() => {

        // TODO: Keeps firing the drawImage function constantly even though the frameIndex hasn't changed
        if (!canvasRef.current || images.length < 1) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        let requestId;

        const render = () => {
            let width = context.canvas.width
            let height = context.canvas.height
            context.clearRect(0, 0, width, height);
            context.drawImage(images[frameIndex], 0, 0, width, height);
            // requestId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(requestId);

    }, [frameIndex]);

    return (
        <div className={classNames('relative', styles.canvascontainer, (isHovered && styles.canvashover))}>
            <canvas ref={canvasRef} height={240} width={450} className={styles.macbook}/>
            <div style={{maskImage: maskImages[maskIndex], WebkitMaskImage: maskImages[maskIndex]}} className={styles.mask}>
                <img src={image} alt={'project image'} className={classNames(styles.image, (isHovered && styles.imagehover))}></img>
            </div>
        </div>
    );
};

export default Canvas;
