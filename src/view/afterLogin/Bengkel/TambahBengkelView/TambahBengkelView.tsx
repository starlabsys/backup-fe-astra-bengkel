import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import IDropDown from "../../../../component/ITextField/IDropDown";
import IButton from "../../../../component/IButton/IButton";
import { useRouter } from "next/router";
import { TambahBengkelViewModel } from "./ViewModel/TambahBengkelViewModel";
import ISpinLoading from "../../../../component/animation/ISpinLoading/ISpinLoading";
import { InterfaceBengkel } from "../../../../domain/repository/bengkel/interface/interfaceBengkel";


interface InterfaceProps {
    title : string,
    path : string
}

const TambahBengkelView = ( props : InterfaceProps ) => {
    const route = useRouter();
    const data : InterfaceBengkel = route.query as any;
    const viewModel = TambahBengkelViewModel( data );
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { props.title } subtitle = { `master-data/bengkel/${ props.path }` }/>
        <div className = { `grid gap-5 bg-white rounded-lg p-5` }>
            <ITitleMd title = { props.title }/>
            <div className = { `grid tablet:grid-cols-2 gap-5 place-items-start` }>
                <IDropDown type = { 'text' }
                           label = { 'Nama Manager' }
                           value = { viewModel.userId }
                           data = { viewModel.listDataUser }
                           onEnter = { 'next' }
                           error = { false }
                           onValueChange = { ( value ) => {
                           } }
                           onValue = { ( value ) => {
                               viewModel.setUserId( value.value );
                           } }/>
                <div className = { `grid gap-5 w-full` }>
                    <ITextFieldDefault type = { 'text' }
                                       label = { 'Dealer ID' }
                                       onEnter = { 'next' }
                                       error = { false }
                                       onChange = { ( value ) => {
                                           viewModel.setDealerId( value.target.value );
                                       } }
                                       value = {
                                           viewModel.dealerId
                                       }/>
                    <IRadioSingle status = { viewModel.status }
                                  setStatus = { () => {
                                      viewModel.setStatus( !viewModel.status );
                                  } }
                                  error = { false }
                                  label = { 'Status' }
                                  value1 = { viewModel.status ? 'Aktif' : 'Tidak Aktif' }/>
                </div>
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Nama Dealer' }
                                   onEnter = { 'next' }
                                   error = { false }
                                   value = { viewModel.nameDealer }
                                   onChange = { ( value ) => {
                                       viewModel.setNameDealer( value.target.value );
                                   } }
                />
                <ITextFieldDefault type = { 'text' }
                                   label = { 'Alamat' }
                                   onEnter = { 'next' }
                                   value = { viewModel.addressDealer }
                                   error = { false }
                                   onChange = { ( value ) => {
                                       viewModel.setAddressDealer( value.target.value );
                                   } }
                />
            </div>
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>
                Kembali
            </IButton>
            <IButton status = { 'success' } onClick = { () => {
                if ( props.title === 'Tambah Bengkel' ) {
                    viewModel.addBengkel().then( () => {
                    } );
                }
                else {
                    viewModel.updateBengkel().then( () => {
                    } );
                }
            } }>
                {
                    viewModel.loading ? <ISpinLoading/> : 'Simpan'
                }
            </IButton>
        </div>
    </div>
}

export default TambahBengkelView
