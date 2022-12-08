import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import { useRouter } from "next/router";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { GetDataBengkel } from "./ViewModel/GetDataBengkel";
import { InterfaceBengkel } from "../../../../domain/repository/bengkel/interface/interfaceBengkel";


const BengkelView = () => {
    const route = useRouter();
    const viewModel = GetDataBengkel();
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Daftar Bengkel' } subtitle = { 'master-data/bengkel' }/>
        <div className = { `bg-white p-5 rounded-lg grid gap-5` }>
            <ITitleMd title = { 'Daftar Bengkel' }/>
            <div className = { `grid gap-5 tablet:flex tablet:place-items-end tablet:place-content-between` }>
                <div className = { `w-full tablet:w-9/12 laptop:w-6/12` }>
                    <ITextFieldDefault type = { 'text' }
                                       value = { undefined }
                                       error = { false }
                                       label = { 'Cari' }
                                       onEnter = { 'enter' }
                                       onChange = { ( value ) => {
                                           viewModel.getDataBengkel( {
                                               page : 0,
                                               limit : 10,
                                               search : value.target.value,
                                           } ).then( () => {
                                               viewModel.setLoading( false );
                                           } );
                                       } }/>
                </div>
                <div className = { `flex` }>
                    <IButton size = { 'medium' } status = { 'success' } onClick = { () => {
                        route.push( '/master-data/bengkel/tambah-bengkel' ).then( () => {
                        } )
                    } }>
                        + Tambah Bengkel
                    </IButton>
                </div>
            </div>
            <ITableData loading = { viewModel.loading }
                        totalPage = { viewModel.totalPage }
                        page = { viewModel.page }
                        info = { () => {
                        } }
                        updated = { ( data ) => {
                            // console.log( data )
                            route.push( {
                                query : data,
                                pathname : '/master-data/bengkel/edit-bengkel'
                            } ).then( () => {
                            } )
                        } }
                        changePage = { () => {
                        } }
                        data = { viewModel.data }
                        header = { [
                            {
                                label : '#',
                                name : '#',
                            },
                            {
                                label : 'Dealer ID',
                                name : 'dealerId'
                            },
                            {
                                label : 'Manager Bengkel',
                                name : 'userId'
                            },
                            {
                                label : 'Nama',
                                name : 'dealerName'
                            },
                            {
                                label : 'Alamat',
                                name : 'dealerAddress'
                            },
                            {
                                label : 'Status',
                                name : 'status'
                            },
                            {
                                label : 'Action',
                                name : 'action'
                            }
                        ] }
            />
        </div>
    </div>
}
export default BengkelView
