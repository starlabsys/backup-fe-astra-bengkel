import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import {CssBaseline} from "@nextui-org/react";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }

    render() {
        return (
            <Html lang = {'id'}>

                <Head>
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Astra Honda Pontianak</title>
                    {CssBaseline.flush()}
                    <meta name = "viewport"
                          content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta name = "description" content = {'Astra Honda Pontianak'}/>
                    <meta name = "keywords" content = {'Astra Honda Pontianak'}/>
                    <meta name = "viewport" content = {'width=device-width, initial-scale=1.0'}/>
                    <link rel = "icon" href = "../../public/img/logo-astra-only.png"/>
                    <link rel = "preconnect" href = "https://fonts.googleapis.com"/>
                    <link rel = "preconnect" href = "https://fonts.gstatic.com" crossOrigin = ""/>
                    <link
                        href = "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=Pacifico&family=Roboto&display=swap"
                        rel = "stylesheet"/>
                    <link href = "https://fonts.googleapis.com/icon?family=Material+Icons"
                          rel = "stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
