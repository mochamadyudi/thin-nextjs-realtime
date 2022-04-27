import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {initThinBackend} from 'thin-backend';
import {ThinBackend} from 'thin-backend/react';
import Headers from "../src/component/headers";
import React from "react";
import Head from 'next/head';

initThinBackend({host: process.env.NEXT_PUBLIC_BACKEND_URL});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThinBackend requireLogin={false}>

            <div className={'w-full min-h-screen bg-slate-900 pt-16'}>
                <Headers/>
                <div className={'w-full h-full  min-h-[1800px]'}>
                    <Component {...pageProps} />
                </div>

            </div>

        </ThinBackend>
    )
}

export default MyApp
