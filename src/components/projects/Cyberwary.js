import styles from '@/styles/projects/cyberwary.module.scss'
import Image from "next/image";

export default function Cyberwary () {
    return (
        <div>
            <div className={styles.colorgrid}>
                <div>
                    <p>#34CC96</p>
                </div>
                <div>
                    <p>#1B3DF0</p>
                </div>
                <div>
                    <p>#D06262</p>
                </div>
                <div>
                    <p>#272727</p>
                </div>
            </div>
            <div className={'mt-4'}>
                <Image src={'/projects/cyberwary/book-mockup.jpg'} alt={'book mockup'} width={1920} height={1080}></Image>
            </div>
            <div className={'mt-4'}>
                <Image src={'/projects/cyberwary/macbook-mockup.jpg'} alt={'book mockup'} width={1920} height={1080}></Image>
            </div>
        </div>
    )
}
