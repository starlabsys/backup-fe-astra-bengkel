import { createContext, useContext } from "react";


interface InterfaceSideBarContext {
    open : boolean;
    setOpen : ( open : boolean ) => void;
}

export const DrawerContext = createContext<InterfaceSideBarContext>( {} as InterfaceSideBarContext )

const IDrawer = () => {
    const sidebar = useContext( DrawerContext )
    return <div className = { `absolute w-screen h-screen` }>
        <div className = { `absolute z-0 bg-black opacity-10 h-full w-full` } onClick = { () => {
            sidebar.setOpen( false )
        } }>
        </div>
        <div className = { `absolute z-10 bg-primary w-8/12 h-full` }>
            foreground
        </div>
    </div>

}
export default IDrawer
