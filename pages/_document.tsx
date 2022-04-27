import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx:any) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html className={'light'} lang={'id'}>
                <Head>
                    <meta name='version' content='0.4.0'/>
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="theme-color" content="#f2213b"/>
                    <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png"/>
                    <link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png"/>
                    <link rel="apple-touch-icon" sizes="384x384" href="/icon-384x384.png"/>
                    <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&family=Roboto:wght@100;200;300;400;500;700;900&display=swap"
                        rel="stylesheet"/>

                    <link rel="manifest" href="/manifest.json"/>
                    {/*<link rel="manifest" href="/manifest.webmanifest" />*/}
                    <link
                        href="/icon-16x16.png"
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                    />
                    <link
                        href="/icon-32x32.png"
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                    />

                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                    <meta name="referrer" content="no-referrer-when-downgrade"/>
                    <link rel="icon" href={'/assets/icons/logo-indozone.png'}/>
                    <link rel="stylesheet" href={`/assets/css/app.css`} type={'text/css'}/>
                    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"/>
                    <script async custom-element="amp-fit-text"
                            src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"/>
                </Head>
                <body className={'bg-fixed bg-white dark:bg-black w-full'}>
                <Main/>
                <NextScript/>
                </body>

            </Html>
        )
    }
}

export default MyDocument
