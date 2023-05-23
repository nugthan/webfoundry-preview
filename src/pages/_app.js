import '@/styles/globals.scss'
import '@/fonts/silka/stylesheet.css'
import Head from "next/head";
import {NextSeo} from "next-seo";

function App({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <div>
            <Head>
                <link rel="shortcut icon" type="image/jpg" href="/favicon.jpg" />
                <meta name="keywords" content="design, development, freelance, website developer, developer, wordpress developer, wordpress"></meta>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default App
