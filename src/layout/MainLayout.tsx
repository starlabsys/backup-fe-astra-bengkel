import ISideBar from "./ISideBar";
import IBody from "./IBody";
import { MiniSideBarProvider } from "../context/miniSideBarContext";
import IDrawer from "./IDrawer/IDrawer";
import IAlertDialog from "../core/utils/error/IAlertDialog";
import { AlertSuccess } from "../core/utils/error/AlertSuccess";
import { IDialogData } from "../context/IDialogData";


interface InterfaceMainLayout {
    children : JSX.Element;
}

const MainLayout = ( props : InterfaceMainLayout ) => {
    return (
        <MiniSideBarProvider>
            <IAlertDialog>
                <IDialogData>
                    <IDrawer>
                        <AlertSuccess>
                            <div className = { `w-screen h-screen flex fixed` }>
                                <ISideBar/>
                                <IBody>
                                    { props.children }
                                </IBody>
                            </div>
                        </AlertSuccess>
                    </IDrawer>
                </IDialogData>
            </IAlertDialog>
        </MiniSideBarProvider>
    )
}
export default MainLayout
