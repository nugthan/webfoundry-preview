import {NextSeo} from "next-seo";
import Layout from "@/layouts/default";
import CarouselItem from "@/components/CarouselItem";
import React from "react";
import Link from "next/link";

export default function About () {
    return (
        <>
            <NextSeo title={'About - Webfoundry - Freelance Web Design & Development in UK'} description={"View some of my latest work and happy clients. If you'd like to see more, please send me an email"}/>
            <div className={'mt-24 container'}>
                <div className={'max-w-[500px]'}>
                    <h1 className={'md:text-title text-titlem'}>About</h1>
                    <h2 className={'md:text-large text-largem'}>&quot;Code is the canvas of your creativity; each line is a stroke that transforms a blank screen into an interactive masterpiece&quot;</h2>
                </div>
                <div className={'mt-16'}>
                    <h2 className={'text-subtitle'}>My journey</h2>
                    <div className={'max-w-[750px]'}>
                        <p className={'mt-4'}>
                            Since 2014, I&apos;ve been a dedicated professional in the design and development industry. My entrepreneurial journey began when I was just 12, founding KryptonDesigns and specializing in creating animations for Minecraft. This venture grew to become one of the most prominent design businesses within the gaming sector. Before the age of 18, I had the privilege of serving over 9000 clients globally, and I take immense pride in maintaining relationships with some of these clients to this day.
                        </p>
                        <p className={'mt-4'}>
                            Throughout my career, I&apos;ve been fortunate to have the opportunity to express myself creatively and form a distinct perspective on life. This personal growth is reflected in my work, which allows me to channel my emotions into something I truly love and am passionate about.
                        </p>
                        <p className={'mt-4'}>
                            I work with a diverse range of clients, from startups to established businesses, and I&apos;m always looking to expand my network. If you&apos;d like to collaborate, please <Link href={'/contact'} className={'font-semibold underline text-orange'}>get in touch</Link>.
                        </p>
                    </div>
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
        </>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <Layout lightNav>
            {page}
        </Layout>
    );
};
