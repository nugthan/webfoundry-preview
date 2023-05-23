import React from "react";

export default function Locatepress() {
    // custom page data
    // LOCATEPRESS
    const colors = [
        {
            name: 'Crisp Red',
            hex: '#d54e1d',
            rgb: '213, 78, 29',
            CMYK: '0, 63, 86, 16',
        },
        {
            name: 'Neutral Orange',
            hex: '#EE8A3C',
            rgb: '238, 138, 60',
            CMYK: '0, 42, 75, 7',
        },
        {
            name: 'Sunbleached Yellow',
            hex: '#F8CC88',
            rgb: '248, 203, 136',
            CMYK: '0, 18, 45, 3',
        },
        {
            name: 'Horizon Green',
            hex: '#A5B370',
            rgb: '164, 179, 112',
            CMYK: '8, 0, 37, 30',
        }
    ]
    const [color, setColor] = React.useState(colors[0]);
    React.useEffect(() => {
        const interval = setInterval(() => {
            let currentColor = colors.find(g => g.name === color.name);
            if (currentColor === colors[colors.length - 1]) {
                setColor(colors[0]);
            } else {
                setColor(colors[colors.indexOf(currentColor) + 1]);
            }
        } , 1000);
        return () => clearInterval(interval);
    });
    return (
        <div>
            <div className={'grid grid-cols-2'}>
                <img src={'/projects/locatepress/logo2.jpg'} alt={'locatepress logo 1'}></img>
                <img src={'/projects/locatepress/logo1.jpg'} alt={'locatepress logo 2'}></img>
            </div>
            <div className={'grid md:grid-cols-2'}>
                <div>
                    <div className={'pt-6 mb-6 lg:mb-0'}>
                        <p className={'md:text-large text-largem mb-6'}>Color Palette</p>
                        <div>
                            <p className={'font-semibold'}>{color.name}</p>
                            <p>HEX: {color.hex}</p>
                            <p>RGB: {color.rgb}</p>
                            <p>CMYK: {color.CMYK}</p>
                        </div>
                    </div>
                </div>
                <div className={'pb-[100%]'} style={{backgroundColor: color.hex}}></div>
            </div>
            <div className={'mt-16'}>
                <p className={'md:text-subtitle text-subtitlem font-normal'}>Research and Inspiration</p>
                <div className={'grid grid-cols-2 mt-8'}>
                    <div className={'mr-16'}>
                        <p className={'md:text-large text-largem font-semibold mb-2'}>Maps</p>
                        <p>I took inspiration from the contour lines that cover maps, creating an emotion of height and power like the very mountains they topographically describe</p>
                    </div>
                    <div>
                        <p className={'md:text-large text-largem font-semibold mb-2'}>Weather</p>
                        <p>The colour palette was chosen to reflect a visual style from a weather mapping technique. It creates a pleasing gradient through the range of soft colors</p>
                    </div>
                </div>
            </div>
            <div className={'mt-16'}>
                <div className={''}>
                    <img src={'/projects/locatepress/wide.jpg'} alt={'locatepress header image'}></img>
                </div>
            </div>
        </div>
    )
}
