import {NextSeo} from "next-seo";
import React from "react";
import Layout from '@/layouts/default';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Contact () {
    const [formFeedback, setFormFeedback] = React.useState(null)
    const [sending, setSending] = React.useState(false)
    const responsive = {
        mobile: {
            breakpoint: {max: 50000, min: 0},
            items: 1,
        }
    }

    const contactForm= (e) => {
        if (sending) return
        setSending(true)
        setFormFeedback(null)
        e.preventDefault()
        let formData = new FormData()

        formData.append('first-name', e.target[0].value)
        formData.append('last-name', e.target[1].value)
        formData.append('email', e.target[2].value)
        formData.append('budget', e.target[3].value)
        formData.append('message', e.target[4].value)

        fetch('https://content.webfoundry.io/wp-json/contact-form-7/v1/contact-forms/58/feedback', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setFormFeedback(data)
                setSending(false)
            })
    }

    return (
        <div className={'container mt-24'}>
            <NextSeo title={'Contact - Webfoundry'} description={"Ready to revolutionise your online image? Get in touch to book my freelance web development and design services"}/>
            <div className={'mt-24 container'}>
                <h1 className={'md:text-title text-titlem'}>Contact</h1>
                <p className={'max-w-[400px]'}>I help help companies and individuals build out their online presence.</p>
                <div className={'mt-16'}>
                    <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                            <form onSubmit={(e) => contactForm(e)} method="POST" className="lg:flex-auto">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-purple"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-purple"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-purple"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block">
                                            Budget
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="budget"
                                                name="budget"
                                                type="text"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-purple"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block">
                                            Message
                                        </label>
                                        <div className="mt-2">
                                      <textarea
                                          id="message"
                                          name="message"
                                          rows={4}
                                          className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-purple"
                                          defaultValue={''}
                                      />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    {!formFeedback &&
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md bg-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Let’s talk
                                        </button>
                                    }
                                </div>
                                {formFeedback && formFeedback.status === 'mail_failed' && <p className={'mt-4 text-sm leading-6 text-gray-500'}>There was a problem sending your email. Please try again later or email me directly at contact@webfoundry.io</p>}
                                {formFeedback && formFeedback.status === 'mail_sent' && <p className={'mt-4 text-sm leading-6 text-gray-500'}>Thank you for your message! I&apos;ll be in touch soon.</p>}
                            </form>
                        <div className="lg:mt-6 lg:w-80 lg:flex-none">
                            <Carousel responsive={responsive} infinite={true} autoPlay autoPlaySpeed={6000} customTransition="ease opacity 0.5s" transitionDuration={500} swipeable={false} draggable={false} removeArrowOnDeviceType={"mobile"}>
                                <figure className="mt-10">
                                    <blockquote className="text-gray-900">
                                        <p>
                                            “Nathan is great to work with - proactive and dedicated with deep knowledge of their subject matter. A real asset to the team!”
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex gap-x-6 ">
                                        <img
                                            src="/review.jpeg"
                                            alt=""
                                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        />
                                        <div>
                                            <div className="text-base font-semibold">Christian Ruland</div>
                                            <div className="">Creative Director @ BBC Broadcast</div>
                                        </div>
                                    </figcaption>
                                </figure>
                                <figure className="mt-10">
                                    <blockquote className="text-gray-900">
                                        <p>
                                            “Nathan is a passionate graphics and UI designer who provides only the best for their clients. They always manages to produce stunningly beautiful designs that perfectly fulfill the customer&apos;s needs.”
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex gap-x-6 ">
                                        <img
                                            src="/review2.jpeg"
                                            alt=""
                                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        />
                                        <div>
                                            <div className="text-base font-semibold">Keith Mitchell</div>
                                            <div className="">Software Developer</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Contact.getLayout = function getLayout(page) {
    return (
        <Layout lightNav>
            {page}
        </Layout>
    );
};
