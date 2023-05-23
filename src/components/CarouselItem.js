import Image from "next/image";
import styles from '@/styles/CarouselItem.module.scss'
import classNames from "classnames";

export default function CarouselItem ({icon, title, description}) {
    // split the title into two parts and wrap the second part in a span
    const titleParts = title.split(' ');
    const titlePart1 = titleParts[0];
    let titlePart2 = titleParts[1];
    // if there are more than 2 words, join the rest of the words back together
    if (titleParts.length > 2) {
        titlePart2 = titleParts.slice(1).join(' ');
    }

    return (
        <div className={classNames(styles.carouselitem)}>
            <div className={styles.title}>
                <div>
                    <Image src={icon} alt={'carousel icon'} width={64} height={64}></Image>
                </div>
                <div className={'ml-4 leading-tight'}>
                    <p className={'text-large font-semibold'}>{titlePart1}</p>
                    <p className={'text-large font-semibold'}>{titlePart2}</p>

                </div>
            </div>
            <div className={styles.description}>
                <p className={'text-gray'}>{description}</p>
                <div className={styles.spacer}></div>
            </div>
            <div className={styles.background}></div>
        </div>
    )
}
