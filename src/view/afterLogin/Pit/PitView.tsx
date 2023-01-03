import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import IButton from "../../../component/IButton/IButton";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import PitViewModel from "./PitViewModel";
import { ITableData } from "../../../component/ITable/ITableNextUI";
import IDropDown from "../../../component/ITextField/IDropDown";
import { IRadioSingle } from "../../../component/ITextField/IRadio";
import { ListOfPIT } from "../../../domain/models/Pit/ModelGetListPit";


const PitView = () => {
    const getDataPit = PitViewModel();

    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "PIT" } subtitle = { "master-data/pit" }/>
            <div className = { `w-full bg-white rounded-lg grid gap-5 relative` }>
                <div className = { `w-full grid gap-10 p-5` }>
                    <ITitleMd title = { "List Data PIT" }/>
                    <div
                        className = { `w-full grid gap-5 tablet:flex tablet:place-content-between tablet:place-items-center` }
                    >
                        <div className = { `w-full tablet:w-6/12` }>
                            <ITextFieldDefault
                                type = { "text" }
                                label = { "Cari Kode PIT" }
                                placeholder = { "Cari..." }
                                onEnter = { "enter" }
                                value = { undefined }
                                error = { false }
                                onChange = { ( event ) => {
                                    getDataPit.getData( event.target.value );
                                } }
                            />
                        </div>
                        <div className = { `grid tablet:flex place-items-center` }>
                            <IButton
                                size = { "medium" }
                                status = { "success" }
                                rounded = { "full" }
                                onClick = { () => {
                                    getDataPit.setOpenAdd( {
                                        open : !getDataPit.openAdd.open,
                                        status : "add"
                                    } )
                                } }
                            >
                                + Tambah Pit
                            </IButton>
                        </div>
                    </div>
                </div>
                {
                    getDataPit.openAdd.open ? <div className = { `w-full grid gap-10 p-5` }>
                        <div className = { `grid tablet:grid-cols-2 gap-5` }>
                            <ITextFieldDefault type = { 'text' }
                                               label = { 'Kode PIT' }
                                               onEnter = { 'next' }
                                               value = { getDataPit.kodePit }
                                               onChange = { ( value ) => {
                                                   getDataPit.setKodePit( value.target.value )
                                               } }/>
                            <IDropDown type = { "text" }
                                       error = { false }
                                       label = { 'Tipe PIT' }
                                       data = { getDataPit.listKodePit }
                                       onEnter = { "enter" }
                                       value = { getDataPit.tipePit?.name }
                                       onValue = { ( item ) => {
                                           getDataPit.setTipePit( item )
                                       } }/>
                            <IRadioSingle status = { getDataPit.status }
                                          label = { 'Status' }
                                          value1 = { getDataPit.status ? 'Aktif' : 'Tidak Aktif' }
                                          error = { false }
                                          setStatus = { () => {
                                              getDataPit.setStatus( !getDataPit.status )
                                          } }/>
                        </div>
                        <IButton status = { 'success' }
                                 onClick = { getDataPit.openAdd.status === 'add'
                                     ? getDataPit.savePit
                                     : getDataPit.updatePit
                                 }>
                            Simpan
                        </IButton>
                    </div> : null
                }
                <div className = { `p-5 grid gap-5` }>
                    {
                        TableData()
                    }
                </div>
            </div>
        </div>
    );

    function TableData() {
        return <ITableData page = { getDataPit.setPage - 1 }
                           totalPage = { 1 }
                           loading = { false }
                           changePage = { index => {

                           } }
                           updated = { ( data : ListOfPIT ) => {
                               getDataPit.setOpenAdd( {
                                   open : true,
                                   status : "edit",
                               } )
                               getDataPit.setIdPit( data.id.toString() );
                               getDataPit.setKodePit( data.kodePit )
                               getDataPit.setStatus( data.rowStatus !== -1 )
                               getDataPit.setTipePit( getDataPit.listKodePit.find( item => item.name === data.tipePit ) )
                           } }
                           header = { getDataPit.header }
                           data = { getDataPit.pit }/>
    }
};
export default PitView;
