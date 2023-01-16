import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";


const theme = createTheme( {
    type : "light", // it could be "light" or "dark"
    // className : "dark", // it could be "light" or "dark"
    theme : {
        colors : {
            // brand colors
            primaryLight : '#20A8D8',
            primaryLightHover : '#5138ED',
            primaryLightActive : '#20A8D8',
            primaryLightContrast : '#1E2F65',
            primary : '#1E2F65',
            primaryBorder : '#1E2F65',
            primaryBorderHover : '#5138ED',
            primarySolidHover : '#1E2F65',
            primarySolidContrast : 'white',
            primaryShadow : '#1E2F65',
        },
        space : {},
        fonts : {},
        breakpoints : {
            tablet : "640px",
            laptop : "1024px",
            desktop : "1920px",
        }
    }
} )

function MyApp( { Component, pageProps } : AppProps ) {
    return (
        <SSRProvider>
            <NextUIProvider theme = { theme }>
                <Component { ...pageProps } />
            </NextUIProvider>
        </SSRProvider>
    );
}

export default MyApp;
