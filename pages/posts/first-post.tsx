import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../layout/layout"
const FirstPost  = () => {
    return(
        <>
        <Layout Children = {
                <>
                    <Head>
                        <title>First Post</title>
                    </Head>
                    <Script
                        src="https://connect.facebook.net/en_US/sdk.js"
                        strategy="lazyOnload"
                        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} 
                    />
                    <p>This is my fitst post !</p>

                </>
            } home = {false}/>
            
        </>
    )
}


export default FirstPost