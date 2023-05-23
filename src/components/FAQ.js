import Faq from "react-faq-component";

export default function FAQ() {
    const config = {
        expandIcon: '+',
        collapseIcon: '-',
    }
    const data = {
        title: "Freelance design and development FAQ",
        rows: [
            {
                title: "What is web development and how does it benefit my business?",
                content: `Web development is the process of creating, designing, and maintaining websites. It can greatly benefit your business by providing an online presence, attracting more customers, and offering a platform to showcase and sell your products or services.`
            },
            {
                title: "What's the difference between web design and web development?",
                content: `Web design focuses on the aesthetics and usability of a website, while web development involves the programming and functionality of the website. Both are crucial for a successful website.`,
            },
            {
                title: "How long does it take to build a website?",
                content: `The time it takes to build a website depends on several factors, including the complexity of the design, the number of pages, and the functionality required. It could take anywhere from a few weeks to a few months.`,
            },
            {
                title: "What technologies do you use for web development?",
                content: `Web development can involve a range of technologies, including HTML, CSS, JavaScript for front-end development, and languages like PHP, Nodejs and Golang for back-end development. Database technologies like SQL, Postgres or MongoDB, and frameworks like React or Wordpress might also be used.`
            },
            {
                title: "Do you provide mobile-responsive web design?",
                content: `A mobile-responsive design ensures that your website looks and works well on a variety of devices, including desktops, laptops, tablets, and smartphones. Most web development services should provide this as a standard feature.`
            },
            {
                title: "Can I update the website myself after it's been built?",
                content: `Depending on the way the website is built, you may or may not be able to update it yourself. Many web development services use content management systems like WordPress or Drupal that allow clients to make updates. However, for more complex changes, you might still need help from me.`
            },
            {
                title: "What is SEO and do you incorporate it into your web development process?",
                content: `SEO stands for Search Engine Optimization. It involves techniques to make your website more visible to search engines, helping you attract more organic traffic. Many web development services should incorporate basic SEO practices into their process, but advanced SEO is typically a separate service.`
            },
            {
                title: "Do you provide website maintenance and support after completion?",
                content: `Regular maintenance is crucial to keep a website secure, up-to-date, and functioning correctly. Different web development services offer various levels of post-launch support, so it's important to clarify this upfront.`
            },
            {
                title: "What's involved in the web development process?",
                content: `The process can vary but usually involves several stages: discovery and planning, design, development, testing, and launch. It's important to have clear communication and regular updates throughout this process.`
            },
            {
                title: "How much does a website cost?",
                content: `The cost of a website can vary greatly depending on its complexity, the number of pages, and any additional services required such as SEO or e-commerce functionality. It's best to get a custom quote based on your specific needs.`
            }
        ]

    }
    return (
        <div>
            <Faq data={data} config={config} />

        </div>
    )
}
