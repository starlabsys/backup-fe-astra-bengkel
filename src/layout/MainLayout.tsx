import ISideBar from "./ISideBar";
import IBody from "./IBody";
import { MiniSideBarProvider } from "../context/miniSideBarContext";
import IDrawer from "./IDrawer/IDrawer";


interface InterfaceMainLayout {
    children : JSX.Element;
}

const MainLayout = ( props : InterfaceMainLayout ) => {
    return (
        <MiniSideBarProvider>
            <IDrawer>
                <div className = { `w-screen h-screen flex fixed` }>
                    <ISideBar/>
                    <IBody>
                        { props.children }
                    </IBody>
                </div>
            </IDrawer>
        </MiniSideBarProvider>
    )
}
export default MainLayout
