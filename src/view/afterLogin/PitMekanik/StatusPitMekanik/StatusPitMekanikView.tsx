import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IDropDown from "../../../../component/ITextField/IDropDown";
import IButton from "../../../../component/IButton/IButton";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import { useRouter } from "next/router";
import { EditPitMekanVM } from "./ViewModel/EditPitMekanVM";
import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import { ListMekanik } from "../../../../domain/models/PitMekanik/ModelGetListPitMekanik";
import { ListDropDown } from "../../../../domain/models/MasterDropDown/ModelGroupMasterDropDown";


const StatusPitMekanikView = () => {
    const route = useRouter();
    const { id, status } = route.query;
    const dataId = id as string;
    const dataStatus = status as string;

    const controller = EditPitMekanVM( dataId );

    return <div className = { `grid gap-5` }>
        <IBreadcrumbs title = { `${ dataStatus === 'edit' ? 'Edit' : 'Info' }` }
                      subtitle = { `master-data/pit-mekanik/${ dataStatus === 'edit' ? 'edit' : 'info' }` }/>
        <div className = { `bg-white rounded-lg p-5 grid gap-5` }>
            <ITitleMd title = { 'Pit Mekanik' }/>
            <ITextFieldDefault type = { 'text' }
                               error = { false }
                               disabled = { true }
                               label = { 'Kode PIT' }
                               onEnter = { "enter" }
                               onChange = { () => {
                               } } value = { controller.kodePit?.kodePit }/>
        </div>
        <div className = { `bg-white gap-5 rounded-lg grid p-5` }>
            <ITitleMd title = { 'List Data Mekanik' }/>
            <div className = { `grid tablet:flex w-full tablet:place-items-end tablet:place-content-end gap-5` }>
                <IDropDown type = { 'text' }
                           label = { 'Cari Mekanik' }
                           onEnter = { 'next' }
                           value = { undefined }
                           data = { controller.dropDownMekanik }
                           error = { false }
                           onValue = { ( data ) => {
                               const valueData : ListDropDown = controller.listDropDownMekanik.find( ( item ) => item.nilai === data.value ) ?? {
                                   label : '',
                                   nilai : '',
                                   tipe : 0,
                                   additionalNilai : ''
                               } as ListDropDown;
                               if ( valueData.nilai !== '' ) {
                                   const dataMekanik : ListMekanik = {
                                       mekanik : valueData?.label ?? '',
                                       isDisable : false,
                                       kodeMekanik : 'K000' + 1,
                                       mekanikID : Number( valueData?.nilai ) ?? 0,
                                       aktif : true,
                                       labelAktif : 'Aktif',
                                   }
                                   controller.listMekanik.find( ( item ) => item.mekanikID === dataMekanik.mekanikID ) === undefined && controller.setListMekanik( [ ...controller.listMekanik, dataMekanik ] );
                               }

                           } }/>
            </div>
            { tableData() }
        </div>
        <div className = { `flex gap-5` }>
            <IButton onClick = { () => {
                route.back();
            } }>Kembali</IButton>
            <IButton status = { 'success' } onClick = { () => {
                controller.saveData();
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
                           updated = { ( data : ListMekanik ) => {
                               const value = controller.listMekanik.indexOf( data )
                               const list = controller.listMekanik
                               list[ value ].aktif = !list[ value ].aktif;
                               list[ value ].labelAktif = list[ value ].aktif ? 'Aktif' : 'Tidak Aktif';
                               controller.setListMekanik( [ ...list ] );
                           } }
                           header = { controller.header }
                           data = { controller.listMekanik }/>
    }
}
export default StatusPitMekanikView
