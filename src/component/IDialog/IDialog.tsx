import { Header1 } from "../styles/Style";
import IButton from "../IButton/IButton";
import { IDialogDataContext } from "../../context/IDialogData";
import ISpinLoading from "../animation/ISpinLoading/ISpinLoading";


interface InterfaceIDialog {
    dialog : IDialogDataContext
    titleHeader : string
    children : JSX.Element
    textButton? : string
    textButtonCancel? : string
    onClick? : () => void
    onClickCancel? : () => void
    oneButton? : boolean
    loading? : boolean
}

export const IDialog = ( props : InterfaceIDialog ) => {
    const closeDialog = () => {
        props.dialog.openDialog( false )
    }
    const text = props.textButton ?? 'Simpan'
    const loading = <ISpinLoading/>;
    return <div className = { `grid gap-10` }>
        <div className = { `${ Header1 } grid gap-2` }>
            { props.titleHeader }
            <hr/>
        </div>
        <div>
            { props.children }
        </div>
        <hr/>
        <div className = { `flex gap-5 place-content-end` }>
            {
                props.oneButton ? null : <IButton size = { 'small' }
                                                  rounded = { "full" }
                                                  status = { "primary" }
                                                  onClick = { props.onClickCancel ?? closeDialog }>
                    { props.textButtonCancel ?? 'Close' }
                </IButton>
            }
            <IButton size = { 'small' } rounded = { "full" } status = { "success" } onClick = { props.onClick }>
                { props.loading ? loading : text }
            </IButton>
        </div>
    </div>
}
