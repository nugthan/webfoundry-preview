import Layout from "@/layouts/default";
import React, {useEffect} from "react";
import WorkItem from "@/components/WorkItem";
import CTA from "@/components/CTA";
import {NextSeo} from "next-seo";

export default function Projects() {
    const [content, setContent] = React.useState(null)
    useEffect(() => {

        fetch('https://content.webfoundry.io/wp-json/wp/v2/project')
            .then(response => response.json())
            .then(data => {
                setContent(data)
            })
    }, [])

    return (
        <>
            <NextSeo title={'Projects - Webfoundry - Freelance Web Design & Development in UK'} description={"View some of my latest work and happy clients. If you'd like to see more, please send me an email"}/>
            <div className={'mt-24 container'}>
                <h1 className={'md:text-title text-titlem'}>Projects</h1>
                <p className={'max-w-[400px]'}>View some of my latest work and happy clients. If you&apos;d like to see more, please get in touch</p>
            </div>
        {content &&
            <div className={'container mt-16 grid lg:grid-cols-2 gap-4'}>
                {content.map((item, index) => (
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
        }
        <div className={'container'}>
            <CTA/>
        </div>
        </>
    )
}
Projects.getLayout = function getLayout(page) {
    return (
        <Layout lightNav>
            {page}
        </Layout>
    );
};
