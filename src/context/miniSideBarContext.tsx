import { createContext, useState } from "react";


export interface InterfaceMiniSideBarContext {
    miniSideBar : boolean;
    setMiniSideBar : ( value : boolean ) => void;
}

export const MiniSideBarContext = createContext<InterfaceMiniSideBarContext>( {} as InterfaceMiniSideBarContext );

interface InterfaceMiniSideBarProvider {
    children : JSX.Element;
}

export const MiniSideBarProvider = ( props : InterfaceMiniSideBarProvider ) => {
    const [ miniSideBar, setMiniSideBar ] = useState( false );

    return (
        <MiniSideBarContext.Provider value = { { miniSideBar, setMiniSideBar } }>
            { props.children }
        </MiniSideBarContext.Provider>
    );
};
