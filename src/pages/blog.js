import {NextSeo} from "next-seo";
import React, {useEffect} from "react";
import Layout from "@/layouts/default";


export default function Blog () {
    const [content, setContent] = React.useState(null)
    useEffect(() => {

        fetch('https://content.webfoundry.io/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => {
                setContent(data)
            })
    }, [])

    return (
        <>
            <NextSeo title={'Blog - Webfoundry - Freelance Web Design & Development in UK'} description={"Read my blog articles"}/>
            <div className={'mt-24 container'}>
                <h1 className={'md:text-title text-titlem'}>Blog</h1>
            </div>
            <div className={'container mt-16'}>
                <div className={'grid grid-cols-3'}>
                    {content && content.map((item, index) => (
                        <div
                            key={index}
                        >
                            <div>
                                <p className={'text-large'}>{item.title.rendered}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
Blog.getLayout = function getLayout(page) {
    return (
        <Layout lightNav>
            {page}
        </Layout>
    );
};
