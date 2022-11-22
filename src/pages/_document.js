import Document, {Html, Head, Main, NextScript} from 'next/document'


class MyDocument extends Document {
    render() {
        return (
            <Html lang = {'id'}>
                <Head>
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Astra Honda Pontianak</title>
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
