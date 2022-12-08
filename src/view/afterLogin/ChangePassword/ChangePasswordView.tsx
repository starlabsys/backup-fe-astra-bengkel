import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import IButton from "../../../component/IButton/IButton";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import ITitleMd from "../../../component/ITitle/ITitleMd";


const ChangePasswordView = () => {
    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "Ubah Sandi" } subtitle = { "ubah-sandi" }/>
            <div className = "p-5 grid gap-10 bg-white rounded-lg">
                <ITitleMd title = { "Edit Password" }/>
                <div className = "grid gap-5 w-6/12">
                    <ITextFieldDefault
                        type = { "text" }
                        label = { "Password Lama" }
                        onEnter = { undefined }
                        onChange = { () => {
                        } }
                        value = { undefined }
                        error = { false }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        label = { "Password Baru" }
                        onEnter = { undefined }
                        onChange = { () => {
                        } }
                        value = { undefined }
                        error = { false }
                    />
                    <ITextFieldDefault
                        type = { "text" }
                        label = { "Konfirmasi Password" }
                        onEnter = { undefined }
                        onChange = { () => {
                        } }
                        value = { undefined }
                        error = { false }
                    />
                </div>
                <div>
                    <IButton size = { "small" } rounded = { "full" }>
                        Simpan
                    </IButton>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordView;
