import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import IButton from "../../../component/IButton/IButton";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import ITitleMd from "../../../component/ITitle/ITitleMd";


const ChangePasswordView = () => {
    return (
        <div className = { `grid gap-5` }>
            <IBreadcrumbs title = { "Ubah Sandi" } subtitle = { "ubah-sandi" }/>
            <div className = "w-full p-5 grid gap-10 bg-white rounded-lg">
                <ITitleMd title = { "Edit Password" }/>
                <div className = "grid gap-5 tablet:grid-cols-2 laptop:grid-cols-2">
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
                    <div className = { `hidden tablet:flex tablet:invisible` }>
                        <ITextFieldDefault
                            type = { "text" }
                            label = { "Password Baru" }
                            onEnter = { undefined }
                            onChange = { () => {
                            } }
                            value = { undefined }
                            error = { false }
                        />
                    </div>
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
                <div className = { `grid grid-cols-2 gap-5` }>
                    <IButton rounded = { "full" }>
                        Batal
                    </IButton>
                    <IButton status = { 'success' } rounded = { "full" }>
                        Simpan
                    </IButton>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordView;
