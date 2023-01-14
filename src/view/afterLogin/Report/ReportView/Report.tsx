import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import ReportViewModel from "./ViewModel/ReportViewModel";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import { InterfaceGetLaporan } from "../../../../domain/repository/laporan/interface/InterfaceGetLaporan";


const ReportView = () => {

    const controller = ReportViewModel();

    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { `Reporting` } subtitle = { `report` }/>
        <div className = { `grid bg-white rounded-lg p-5 gap-5` }>
            {/*{ tableData() }*/ }
            <div className = { `grid grid-cols-2 gap-5` }>
                <ITextFieldDefault type = { 'date' }
                                   label = { 'Date From' }
                                   onEnter = { 'next' }
                                   value = { controller.dataSend?.dateFrom }
                                   onChange = { ( value ) => {
                                       controller.setDataSend( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               dateFrom : value.target.value
                                           } as InterfaceGetLaporan
                                       } )
                                   } }/>
                <ITextFieldDefault type = { 'date' }
                                   label = { 'Date To' }
                                   onEnter = { 'next' }
                                   value = { controller.dataSend?.dateFrom }
                                   onChange = { ( value ) => {
                                       controller.setDataSend( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               dateTo : value.target.value
                                           } as InterfaceGetLaporan
                                       } )
                                   } }/>
            </div>
            <IButton status = { 'success' } onClick = { () => {
                controller.getListLaporan()
            } }>
                Download Laporan
            </IButton>
        </div>
    </div>

    function tableData() {
        return <ITableData page = { 0 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {
                               console.log( index )
                           } }
                           updated = { ( data ) => {
                           } }
                           header = { [
                               {
                                   label : '#',
                                   name : '#',
                               },
                               {
                                   label : 'Nama Report',
                                   name : 'nama_report',
                               },
                               {
                                   label : 'Action',
                                   name : 'action',
                               }
                           ] }
                           data = { [] }/>
    }
}
export default ReportView
