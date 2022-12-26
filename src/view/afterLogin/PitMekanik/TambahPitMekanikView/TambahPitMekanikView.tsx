import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IDropDown from "../../../../component/ITextField/IDropDown";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import IButton from "../../../../component/IButton/IButton";
import { TambahPitMekanikVM } from "./ViewModel/TambahPitMekanikVM";
import { IRadioSingle } from "../../../../component/ITextField/IRadio";
import { ListMekanik } from "../../../../domain/models/PitMekanik/ModelGetListPitMekanik";
import { useRouter } from "next/router";


export const TambahPitMekanikView = () => {
    const route = useRouter();
    const controller = TambahPitMekanikVM();
    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { 'Tambah Pit Mekanik' } subtitle = { 'master-data/pit-mekanik/tambah-pit-mekanik' }/>
        <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
            <ITitleMd title = { 'Pit Mekanik' }/>
            <IDropDown type = { 'text' }
                       error = { false }
                       label = { 'Kode PIT' }
                       data = { controller.pit }
                       onEnter = { "enter" }
                       onValueChange = { () => {
                       } }
                       onValue = { ( value ) => {
                           controller.setKodePit( value );
                       } }/>
        </div>
        <div className = { `bg-white gap-5 rounded-lg grid p-5` }>
            <ITitleMd title = { 'List Data Mekanik' }/>
            <div className = { `flex w-full place-items-end place-content-end` }>
                <div className = { `flex` }>
                    <IButton status = { 'success' } onClick = { () => {
                        controller.setOpenAddMekanik( {
                            open : !controller.openAddMekanik.open,
                            data : 'add'
                        } );
                    } }>Tambah Mekanik</IButton>
                </div>
            </div>
            {
                controller.openAddMekanik.open ? <div className = { `grid gap-5` }>
                    <div className = { `grid tablet:grid-cols-2 gap-5` }>
                        <IDropDown type = { 'text' }
                                   error = { false }
                                   label = { 'Cari Mekanik' }
                                   data = { controller.listMekanik }
                                   onEnter = { 'enter' }
                                   onValue = { ( data ) => {
                                       controller.setMekanik( data );
                                   } }
                                   onValueChange = { () => {
                                   } }/>
                        <IRadioSingle status = { controller.status }
                                      label = { 'Status' }
                                      value1 = { controller.status ? 'Aktif' : 'Tidak Aktif' }
                                      error = { false }
                                      setStatus = { () => {
                                          controller.setStatus( !controller.status )
                                      } }/>
                    </div>
                    <IButton status = { 'success' } onClick = { () => {
                        const data : ListMekanik = {
                            mekanik : controller.mekanik?.name ?? '',
                            aktif : controller.status,
                            labelAktif : controller.status ? 'Aktif' : 'Tidak Aktif',
                            mekanikID : controller.mekanik?.id ?? 0,
                            kodeMekanik : '',
                            isDisable : true,
                        }
                        controller.listAddMekanik.find( ( item ) => item.mekanik === data.mekanik ) === undefined && controller.setListAddMekanik( [ ...controller.listAddMekanik, data ] );
                    } }>
                        Simpan
                    </IButton>
                </div> : null
            }
            { tableData() }
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>Kembali</IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.saveData()
            } }>Simpan</IButton>
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
                           header = { controller.header }
                           data = { controller.listAddMekanik }/>
    }
}
