import ImageLottie from "../lottie/image-lottie";
import loading from '../../../public/lottie/loading.json'
import { createContext, useState } from "react";


interface Interface {
    children : JSX.Element;
}

interface InterfaceILoadingContext {
    openLoading : ( value : boolean ) => void;
}

export const ILoadingContext = createContext( {} as InterfaceILoadingContext )

export const ILoading = ( props : Interface ) => {
    const [ show, setShow ] = useState( false );
    return <ILoadingContext.Provider value = { {
        openLoading : setShow
    } }>
        { props.children }
        {
            show ? <div className = { `w-screen h-screen` }>
                <div className = { `w-screen h-screen bg-black opacity-50` }>
                </div>
                <div className = { `absolute top-0 w-screen h-screen flex place-content-center place-items-center` }>
                    <ImageLottie file = { loading }/>
                </div>
            </div> : null
        }
    </ILoadingContext.Provider>
}
