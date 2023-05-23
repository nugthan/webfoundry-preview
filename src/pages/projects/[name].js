import {useRouter} from "next/router";
import Layout from "@/layouts/default";
import React, {useEffect} from "react";
import Image from "next/image";
import Locatepress from "@/components/projects/Locatepress";
import Cyberwary from "@/components/projects/Cyberwary";
import CTA from "@/components/CTA";
import {NextSeo} from "next-seo";



export default function ProjectPage () {
    const [content, setContent] = React.useState(null)
    const [title, setTitle] = React.useState('View Project')
    const router = useRouter()
    const {name} = router.query
    // make first letter uppercase

    // get project data from wordpress
    useEffect(() => {
        if (!name) {
            return
        }

        fetch('https://content.webfoundry.io/wp-json/wp/v2/project?slug=' + name)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    // combine industries
                    let industries = data[0].acf.industries
                    let industryString = ''
                    industries.forEach((industry) => {
                        // add a comma if it's not the last item
                        if (industries.indexOf(industry) !== industries.length - 1) {
                            industryString += industry.name + ', '
                        } else {
                            industryString += industry.name
                        }
                    })
                    data[0].acf.industries = industryString

                    // combine services
                    let services = data[0].acf.services
                    let servicesString = ''
                    services.forEach((service) => {
                        // add a comma if it's not the last item
                        if (services.indexOf(service) !== services.length - 1) {
                            servicesString += service.name + ', '
                        } else {
                            servicesString += service.name
                        }
                    })
                    data[0].acf.services = servicesString


                    setContent(data[0])
                    setTitle(name.charAt(0).toUpperCase() + name.slice(1))
                    console.log(title)
                }
            })
    }, [name])

    return (
        <div>
            <NextSeo title={title + ' - Webfoundry - Freelance Web Development in UK'} description={'View my work for' + title}/>
            {content &&
                <div className={'mt-24 container'}>
                    <h1 className={'md:text-large text-largem capitalize'}>{name}</h1>
                    <h2 className={'md:text-title text-titlem'}>{content.acf.description}</h2>
                    <div className={'pb-[57%] relative mt-6'}>
                        <Image fill src={content.acf.project_cover} alt={content.acf.logo_alt} className={'object-cover object-top rounded-2xl'}/>
                    </div>
                    <div className={'mt-16 lg:grid lg:grid-cols-3 lg:px-12'}>
                        <div className={'mb-16 lg:mb-0 grid sm:grid-cols-2 gap-6 md:flex lg:flex-col justify-between lg:max-w-[250px] w-full'}>
                            <div className={'w-full'}>
                                <h3 className={'md:text-large text-largem font-medium'}>Services</h3>
                                <p className={'capitalize'}>{content.acf.services}</p>
                            </div>
                            <div className={'w-full'}>
                                <h3 className={'md:text-large text-largem font-medium'}>Industry</h3>
                                <p className={'capitalize '}>{content.acf.industries}</p>

                            </div>
                            <div className={'w-full'}>
                                <h3 className={'md:text-large text-largem font-medium'}>Length</h3>
                                <p className={''}>{content.acf.project_length}</p>
                            </div>
                            <div className={'w-full'}>
                                <h3 className={'md:text-large text-largem font-medium'}>Work type</h3>
                                <p className={''}>{content.acf.type}</p>
                            </div>
                        </div>
                        <div className={'col-span-2'}>
                            <p className={'md:text-subtitle text-subtitlem font-medium mb-2'}>What is <span className={'capitalize'}>{name}</span></p>
                            <p className={''}>{content.acf.company_description}</p>
                            <p className={'md:text-subtitle text-subtitlem font-medium mt-8 mb-2'}>My role</p>
                            <p className={''}>{content.acf.my_role}</p>
                            <div className={'flex mt-4'}>
                                {content.acf.website_url &&
                                    <a href={content.acf.website_url + '?ref=webfoundry'} target={'_blank'}>
                                        <div className={'bg-black font-semibold text-white px-4 py-2 flex items-center'}>
                                            <p className={'mr-2'}>Visit site</p>
                                            <svg width="10" height="16" viewBox="0 0 7 6" fill="none"><path d="M0.125 5.51087L0.614131 6L5.42935 1.18478L5.42935 5.21739L6.125 5.21739L6.125 -2.62268e-07L0.907609 -3.42089e-08L0.907609 0.695652L4.94022 0.695652L0.125 5.51087Z" fill="white"></path></svg>
                                        </div>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>

                    {/* per page custom content here */}
                    <div className={'mt-16'}>
                        {name === 'locatepress' &&
                            <Locatepress/>
                        }
                        {name === 'cyberwary' &&
                            <Cyberwary/>
                        }
                    </div>
                    <CTA/>
                </div>
            }
        </div>
    )
}

ProjectPage.getLayout = function getLayout(page) {
    return (
        <Layout lightNav>
            {page}
        </Layout>
    );
};
