import LoginView from "../../../view/beforeLogin/auth/LoginView";
import IAlertDialog from "../../../core/utils/error/IAlertDialog";


const Login = () => {
    return <IAlertDialog>
        <LoginView/>
    </IAlertDialog>
}
export default Login
