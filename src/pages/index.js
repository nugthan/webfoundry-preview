import React, {useEffect} from 'react';
import Layout from '@/layouts/default';
import classNames from 'classnames';
import {Header} from "@/components/Header";
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import { NextSeo } from 'next-seo';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "@/components/CarouselItem";
import WorkItem from "@/components/WorkItem";

import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";


function Index({posts, tags}) {
    // load wordpress content

    const [content, setContent] = React.useState(null)
    useEffect(() => {

        fetch('https://content.webfoundry.io/wp-json/wp/v2/project?per_page=4')
            .then(response => response.json())
            .then(data => {
                setContent(data)
            })
    }, [])


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        }
    }
    let carousel;


    return (
        <>
            <NextSeo title={'Webfoundry - Freelance Web Design & Development in UK'} description={"I'm Nathan, a freelance website designer and developer pushing modern boundaries of digital design since 2014"}/>
            <div>
                <div className={styles.header}>
                    <Header></Header>
                    <div className={'container'}>
                        <div className={styles.headerGrid}>
                            <div>
                                <h3 className={'text-title font-semibold mb-6 leading-tight lg:leading-normal'}>Hi, I&apos;m Nathan. I create amazing experiences</h3>
                                <div className={'max-w-[390px]'}>
                                    <p className={'md:text-large text-largem inline'}>I&apos;m a </p>
                                    <h1 className={'md:text-large text-largem inline'}>freelance <span>website designer</span> and <span>developer</span> </h1>
                                    <p className={'md:text-large text-largem inline'}>pushing modern boundaries of digital design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mt-16 container'}>
                    <div className={'flex items-end'}>
                        <div className={'flex-grow'}>
                            <p className={'font-semibold text-purple mb-[-8px]'}>Professional Services</p>
                            <h2 className={'text-subtitle'}>All you need, <span className={'orange-underline'}>in one place</span></h2>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={styles.carouselbutton} onClick={() => carousel.previous()}>
                                <svg width="10px" height="18px" viewBox="0 0 10 18" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Extra-Large" transform="translate(-1526.000000, -633.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="chevron" transform="translate(1531.000000, 642.000000) scale(-1, 1) translate(-1531.000000, -642.000000) translate(1526.000000, 633.000000)">
                                                <path d="M0.833376736,18 C0.620253956,18 0.406922845,17.9200226 0.244216206,17.7602724 C-0.081405402,17.4405674 -0.081405402,16.9228621 0.244216206,16.6033617 L7.98830221,8.99998722 L0.244216206,1.39661278 C-0.081405402,1.07690779 -0.081405402,0.559202505 0.244216206,0.239702051 C0.569837814,-0.0797984026 1.09712399,-0.0800029484 1.42253727,0.239702051 L9.75578379,8.42153185 C10.0814054,8.74123685 10.0814054,9.25894213 9.75578379,9.57844259 L1.42253727,17.7602724 C1.25983063,17.9200226 1.04649952,18 0.833376736,18 Z" id="Right_Arrow_4_"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className={classNames(styles.carouselbutton, 'ml-2')} onClick={() => carousel.next()}>
                                <svg width="10px" height="18px" viewBox="0 0 10 18" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Extra-Large" transform="translate(-1571.000000, -633.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="chevron" transform="translate(1571.000000, 633.000000)">
                                                <path d="M0.833376736,18 C0.620253956,18 0.406922845,17.9200226 0.244216206,17.7602724 C-0.081405402,17.4405674 -0.081405402,16.9228621 0.244216206,16.6033617 L7.98830221,8.99998722 L0.244216206,1.39661278 C-0.081405402,1.07690779 -0.081405402,0.559202505 0.244216206,0.239702051 C0.569837814,-0.0797984026 1.09712399,-0.0800029484 1.42253727,0.239702051 L9.75578379,8.42153185 C10.0814054,8.74123685 10.0814054,9.25894213 9.75578379,9.57844259 L1.42253727,17.7602724 C1.25983063,17.9200226 1.04649952,18 0.833376736,18 Z" id="Right_Arrow_4_"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                        <Carousel
                            infinite={true}
                            responsive={responsive}
                            ref={(el) => (carousel = el)}
                            arrows={false}
                            className={'pb-36'}
                        >
                                <CarouselItem
                                    icon={'/icons/sketch.svg'}
                                    title={'UI/UX design'}
                                    description={'As an experienced web and digital designer, I have had the opportunity to work with a diverse range of clients. I have helped my clients to achieve their goals by creating unique and effective websites and designs'}
                                />
                            <CarouselItem
                                icon={'/icons/web.svg'}
                                title={'Website development'}
                                description={'I am comfortable working in a variety of coding languages and have experience designing and implementing complex applications. Contact me today to learn more about what I can do for you'}
                            />
                            <CarouselItem
                                icon={'/icons/maintenance.svg'}
                                title={'Website maintenance'}
                                description={'Keep your Wordpress installations running smoothly with affordable maintenance packages to keep your website on track, worry free. Have peace of mind knowing your website is in good hands'}
                            />
                            <CarouselItem
                                icon={'/icons/branding.svg'}
                                title={'Branding services'}
                                description={'I offer branding services, including logos, business cards and anything else your company needs to maintain a professional image'}
                            />
                        </Carousel>
                </div>
                <div className={'container -mt-16'}>
                    <p className={'text-subtitle'}>Recent work</p>
                    <div className={'grid lg:grid-cols-2 gap-4 mt-6'}>

                        {content && content.map((item, index) => (
                                <WorkItem
                                    key={index}
                                    item={item}
                                    link={'/' + item.title.rendered}
                                    logo={item.acf.logo}
                                    alt={item.acf.logo_alt}
                                    description={item.acf.description}
                                    bg={item.acf.background}
                                    image={item.acf.cover_image}
                                    color={item.acf.white_text}
                                    noMacbook={item.acf.no_macbook}
                                />
                        ))}
                    </div>
                </div>
                <div className={'container mt-16'}>
                    <div>
                        <p className={'text-title font-semibold'}>About Nathan</p>
                        <div className={'max-w-[500px]'}>
                            <p className={'mb-4'}>Based in Wales, I&apos;m a multifaceted website designer and developer that&apos;s been creating websites, designs and branding for clients worldwide since 2014.</p>
                            <div className={'flex items-center'}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Extra-Large" transform="translate(-310.000000, -3181.000000)" fill="#000000" fillRule="nonzero">
                                            <g id="checked" transform="translate(310.000000, 3181.000000)">
                                                <path d="M15.3782774,1.95538649 C15.1413147,1.71894623 14.7568324,1.71853884 14.5198697,1.95438369 L7.23691641,9.1896123 L4.60924809,6.34690783 C4.38219555,6.10141108 3.99831095,6.08549171 3.75143811,6.31162199 C3.50475404,6.5377836 3.48896072,6.92034989 3.71601326,7.166066 L6.77167421,10.4715604 C6.88358025,10.5927105 7.04019207,10.6630629 7.20532978,10.6664786 C7.20976575,10.6666667 7.21404441,10.6666667 7.21829162,10.6666667 C7.37877313,10.6666667 7.53315123,10.6031772 7.646882,10.4903001 L15.3770819,2.81061394 C15.6146423,2.57480042 15.6150513,2.19182674 15.3782774,1.95538649 Z" id="Path"></path>
                                                <path d="M15.3969687,7.39696875 C15.0639062,7.39696875 14.7939687,7.66690625 14.7939687,8 C14.7939687,11.7463437 11.7463437,14.7939688 8,14.7939688 C4.253875,14.7939688 1.20603125,11.7463438 1.20603125,8 C1.20603125,4.253875 4.253875,1.20603125 8,1.20603125 C8.3330625,1.20603125 8.60303125,0.93609375 8.60303125,0.60303125 C8.60303125,0.2699375 8.3330625,0 8,0 C3.58875,0 0,3.58875 0,8 C0,12.4110625 3.58875,16 8,16 C12.4110625,16 16,12.4110625 16,8 C16,7.6669375 15.7300625,7.39696875 15.3969687,7.39696875 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className={'ml-2'}>Experience with clients of all sizes</p>
                            </div>
                            <div className={'flex items-center'}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Extra-Large" transform="translate(-310.000000, -3181.000000)" fill="#000000" fillRule="nonzero">
                                            <g id="checked" transform="translate(310.000000, 3181.000000)">
                                                <path d="M15.3782774,1.95538649 C15.1413147,1.71894623 14.7568324,1.71853884 14.5198697,1.95438369 L7.23691641,9.1896123 L4.60924809,6.34690783 C4.38219555,6.10141108 3.99831095,6.08549171 3.75143811,6.31162199 C3.50475404,6.5377836 3.48896072,6.92034989 3.71601326,7.166066 L6.77167421,10.4715604 C6.88358025,10.5927105 7.04019207,10.6630629 7.20532978,10.6664786 C7.20976575,10.6666667 7.21404441,10.6666667 7.21829162,10.6666667 C7.37877313,10.6666667 7.53315123,10.6031772 7.646882,10.4903001 L15.3770819,2.81061394 C15.6146423,2.57480042 15.6150513,2.19182674 15.3782774,1.95538649 Z" id="Path"></path>
                                                <path d="M15.3969687,7.39696875 C15.0639062,7.39696875 14.7939687,7.66690625 14.7939687,8 C14.7939687,11.7463437 11.7463437,14.7939688 8,14.7939688 C4.253875,14.7939688 1.20603125,11.7463438 1.20603125,8 C1.20603125,4.253875 4.253875,1.20603125 8,1.20603125 C8.3330625,1.20603125 8.60303125,0.93609375 8.60303125,0.60303125 C8.60303125,0.2699375 8.3330625,0 8,0 C3.58875,0 0,3.58875 0,8 C0,12.4110625 3.58875,16 8,16 C12.4110625,16 16,12.4110625 16,8 C16,7.6669375 15.7300625,7.39696875 15.3969687,7.39696875 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className={'ml-2'}>Over 8 years of freelance experience</p>
                            </div>
                            <div className={'flex items-center'}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Extra-Large" transform="translate(-310.000000, -3181.000000)" fill="#000000" fillRule="nonzero">
                                            <g id="checked" transform="translate(310.000000, 3181.000000)">
                                                <path d="M15.3782774,1.95538649 C15.1413147,1.71894623 14.7568324,1.71853884 14.5198697,1.95438369 L7.23691641,9.1896123 L4.60924809,6.34690783 C4.38219555,6.10141108 3.99831095,6.08549171 3.75143811,6.31162199 C3.50475404,6.5377836 3.48896072,6.92034989 3.71601326,7.166066 L6.77167421,10.4715604 C6.88358025,10.5927105 7.04019207,10.6630629 7.20532978,10.6664786 C7.20976575,10.6666667 7.21404441,10.6666667 7.21829162,10.6666667 C7.37877313,10.6666667 7.53315123,10.6031772 7.646882,10.4903001 L15.3770819,2.81061394 C15.6146423,2.57480042 15.6150513,2.19182674 15.3782774,1.95538649 Z" id="Path"></path>
                                                <path d="M15.3969687,7.39696875 C15.0639062,7.39696875 14.7939687,7.66690625 14.7939687,8 C14.7939687,11.7463437 11.7463437,14.7939688 8,14.7939688 C4.253875,14.7939688 1.20603125,11.7463438 1.20603125,8 C1.20603125,4.253875 4.253875,1.20603125 8,1.20603125 C8.3330625,1.20603125 8.60303125,0.93609375 8.60303125,0.60303125 C8.60303125,0.2699375 8.3330625,0 8,0 C3.58875,0 0,3.58875 0,8 C0,12.4110625 3.58875,16 8,16 C12.4110625,16 16,12.4110625 16,8 C16,7.6669375 15.7300625,7.39696875 15.3969687,7.39696875 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className={'ml-2'}>I work with agencies and individuals</p>
                            </div>
                        </div>
                        <Link href={'/about'}>
                            <div className={'mt-4 flex items-center'}>
                                <p className={'font-semibold text-orange mr-2'}>Learn more about me</p>
                                <svg width="15.0946469px" height="11.90509px" viewBox="0 0 15.0946469 11.90509" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Extra-Large" transform="translate(-471.000000, -3286.000000)" stroke="#F93821">
                                            <g id="Group" transform="translate(471.000000, 3286.000000)">
                                                <line x1="0" y1="6.15723" x2="15.0946469" y2="6.15723" id="Path"></line>
                                                <polyline id="Path" points="8.52636687 0 14.6841469 6.15779 8.93688687 11.90509"></polyline>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <CTA/>
                    <div className={'mt-16 container lg:px-36 md:px-12 px-0'}>
                        <FAQ></FAQ>
                    </div>
                    <div className={'mt-16'}>
                        <div className={'flex-grow'}>
                            <p className={'font-semibold text-purple mb-[-8px]'}>Any size and shape</p>
                            <h2 className={'text-subtitle'}>Who do I work with?</h2>
                        </div>
                        <div className={'grid lg:grid-cols-3 lg:gap-0 gap-4'}>
                                    <CarouselItem
                                        icon={'/icons/start-up.svg'}
                                        title={'Startups + Sole traders'}
                                        description={'I collaborate with emerging startups, helping them make their initial foray into the digital realm. I firmly believe in nurturing enduring partnerships and seek to align myself with businesses with whom I can forge a lasting working relationship.'}
                                    />
                                <CarouselItem
                                    icon={'/icons/agency.svg'}
                                    title={'Agencies'}
                                    description={'Working on a white-label basis, I offer design and development services to agencies. If you need a freelancer to expand your offering, please get in touch'}
                                />
                                <CarouselItem
                                    icon={'/icons/company.svg'}
                                    title={'Companies'}
                                    description={'I enjoy working with companies from small businesses to large enterprises. I have experience working with a wide range of clients, from local businesses to global brands.'}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

Index.getLayout = function getLayout(page) {
    return (
        <Layout absoluteNav>
            {page}
        </Layout>
    );
};
