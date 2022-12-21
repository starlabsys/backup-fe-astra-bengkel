import ISideBar from "./ISideBar";
import IBody from "./IBody";
import { MiniSideBarProvider } from "../context/miniSideBarContext";
import IDrawer from "./IDrawer/IDrawer";
import IAlertDialog from "../core/utils/error/IAlertDialog";
import { AlertSuccess } from "../core/utils/error/AlertSuccess";
import { IDialogData } from "../context/IDialogData";
import { IToast } from "../context/IToast";
import { ILoading } from "../component/ILoading/ILoading";


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
                            <IToast>
                                <ILoading>
                                    <div className = { `w-screen h-screen flex fixed` }>
                                        <ISideBar/>
                                        <IBody>
                                            { props.children }
                                        </IBody>
                                    </div>
                                </ILoading>
                            </IToast>
                        </AlertSuccess>
                    </IDrawer>
                </IDialogData>
            </IAlertDialog>
        </MiniSideBarProvider>
    )
}
export default MainLayout
