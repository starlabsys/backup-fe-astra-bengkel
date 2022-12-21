import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import { ITableData } from "../../../component/ITable/ITableNextUI";


const ReportView = () => {

    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { `Reporting` } subtitle = { `report` }/>
        <div className = { `grid bg-white rounded-lg p-5 gap-5` }>
            { tableData() }
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
