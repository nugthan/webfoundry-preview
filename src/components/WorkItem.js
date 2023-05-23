import styles from '@/styles/WorkItem.module.scss';
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import Canvas from "@/components/Canvas";

export default function WorkItem({logo, alt, description, color, bg, image, hoverinvert, link, noMacbook, item}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    }
    const handleLeave = () => {
        setIsHovered(false);
    }

    return (
        <Link href={link ? '/projects' + link : '/'}>
            <div className={styles.workitem} style={{background: bg}} onMouseOver={handleHover} onMouseLeave={handleLeave}>
                <div className={classNames(styles.info)} style={{color: (color ? 'white' : 'black')}}>
                </div>
                <div className={styles.content} style={{color: (color ? 'white' : 'black')}}>
                    <Image src={logo} alt={alt} width={120} height={200}></Image>
                    <p className={'max-w-[140px] mt-6 pr-6 md:pr-0'}>{description}</p>
                </div>
                <div className={styles.cta} style={{color: (color ? 'white' : 'black') }}>
                    <p className={'font-semibold mr-2'}>View project</p>
                    <svg width="15.0946469px" height="11.90509px" viewBox="0 0 15.0946469 11.90509">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Extra-Large" transform="translate(-439.000000, -1443.000000)" stroke="#000000" style={{stroke: (color ? 'white' : 'black')}}>
                                <g id="Group" transform="translate(439.000000, 1443.000000)">
                                    <line x1="0" y1="6.15723" x2="15.0946469" y2="6.15723" id="Path"></line>
                                    <polyline id="Path" points="8.52636687 0 14.6841469 6.15779 8.93688687 11.90509"></polyline>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles.imagecontainer}>
                    <div className={classNames(styles.projectcover)} style={{backgroundImage: `url('${item.acf.project_cover}')`}}></div>
                    <Canvas isHovered={isHovered} image={image} />
                </div>
            </div>
        </Link>
    )
}
