import ISideBar from "./ISideBar";
import IBody from "./IBody";
import { MiniSideBarProvider } from "../context/miniSideBarContext";


interface InterfaceMainLayout {
    children : JSX.Element;
}

const MainLayout = ( props : InterfaceMainLayout ) => {
    return (
        <MiniSideBarProvider>
            <div className = { `w-screen h-screen flex fixed` }>
                <ISideBar/>
                <IBody>
                    { props.children }
                </IBody>
            </div>
        </MiniSideBarProvider>
    )
}
export default MainLayout
