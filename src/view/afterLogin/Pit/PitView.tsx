import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import IButton from "../../../component/IButton/IButton";
import { EnumSizeDialog } from "../../../utils/enum/EnumSizeDialog";
import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IDropDown from "../../../component/ITextField/IDropDown";
import { IRadioSingle } from "../../../component/ITextField/IRadio";
import { AddPitController } from "./controller/AddPitController";
import ISpinLoading from "../../../component/animation/ISpinLoading/ISpinLoading";
import TablePitController from "./component/TablePit/TablePitController";
import { SearchPitController } from "./controller/SearchPitController";
import { ITableData } from "../../../component/ITable/ITableNextUI";


const PitView = () => {
    const addPit = AddPitController();
    const getDataPit = TablePitController();
    const search = SearchPitController();

    return (
        <div className = { `flex-1 grid gap-5` }>
            <IBreadcrumbs title = { "PIT" } subtitle = { "pit" }/>
            <div className = { `w-full bg-white rounded-lg grid gap-5 relative` }>
                <div className = { `w-full grid gap-10 p-5` }>
                    <ITitleMd title = { "List Data PIT" }/>
                    <div
                        className = { `w-full grid gap-5 tablet:flex tablet:place-content-between tablet:place-items-center` }
                    >
                        <div className = { `w-full tablet:w-6/12` }>
                            <ITextFieldDefault
                                type = { "text" }
                                label = { "Cari" }
                                placeholder = { "Cari..." }
                                onEnter = { "enter" }
                                onChange = { ( event ) => {
                                    search.setSearch( event.target.value );
                                    search
                                        .searchData( {
                                            page : 0,
                                            limit : 10,
                                            search : event.target.value
                                        } )
                                        .then( ( value ) => {
                                        } );
                                } }
                            />
                        </div>
                        <div className = { `grid tablet:flex place-items-center` }>
                            <IButton
                                size = { "medium" }
                                status = { "success" }
                                rounded = { "full" }
                                onClick = { onSaved }
                            >
                                + Tambah Pit
                            </IButton>
                        </div>
                    </div>
                </div>
                <div className = { `p-5 grid gap-5` }>
                    {
                        TableData()
                    }
                </div>
            </div>
        </div>
    );

    function onSaved() {
        let kodePit = "";
        let tipePit = "";
        let isActive = true;
        let loading = false;
        addPit.dialog.openDialog( true );
        addPit.dialog.setSizeDialog( EnumSizeDialog.small );
        addPit.dialog.setHeaderDialog( "Tambah PIT" );
        addPit.dialog.setDialogData(
            <div className = { `w-full grid gap-5` }>
                <ITextFieldDefault
                    name = { "kodePit" }
                    required = { true }
                    type = { "text" }
                    label = { "Kode PIT" }
                    placeholder = { "Masukkan kode PIT" }
                    onChange = { ( event ) => {
                        kodePit = event.target.value;
                    } }
                    onEnter = { "next" }
                />
                <IDropDown
                    required = { true }
                    type = { "text" }
                    label = { "Tipe PIT" }
                    data = { [
                        {
                            id : 1,
                            value : "REGULAR",
                            name : "REGULAR"
                        },
                        {
                            id : 1,
                            value : "BIG BIKE",
                            name : "BIG BIKE"
                        },
                        {
                            id : 1,
                            value : "FAST TRACK",
                            name : "FAST TRACK"
                        },
                        {
                            id : 1,
                            value : "HIGH END",
                            name : "HIGH END"
                        }
                    ] }
                    onEnter = { "next" }
                    onValue = { ( value ) => {
                        tipePit = value.value;
                    } }
                    onValueChange = { () => {
                    } }
                />
                <IRadioSingle
                    label = { "Status" }
                    value1 = { "Aktif" }
                    status = { isActive }
                    setStatus = { ( value ) => {
                        isActive = value;
                    } }
                />
            </div>
        );
        addPit.dialog.setDisable( true );
        addPit.dialog.setFooterDialog(
            <IButton
                size = { "medium" }
                rounded = { "full" }
                status = { "success" }
                onClick = { () => {
                    addPit
                        .savePit( {
                            kodePit : kodePit,
                            tipePit : tipePit,
                            isActive : isActive
                        } )
                        .then( async ( value : any ) => {
                            addPit.dialog.openDialog( false );
                            if ( value === null ) {
                                getDataPit
                                    .getData( {
                                        page : 0,
                                        limit : 10
                                    } )
                                    .then( ( value ) => {
                                    } );
                            }
                            else {
                                addPit.dialog.openDialog( false );
                                getDataPit.context.setOpen( true );
                                getDataPit.context.onError( true );
                                getDataPit.context.giveMessage( value );
                            }
                        } );
                } }
            >
                { loading ? <ISpinLoading/> : "Simpan" }
            </IButton>
        );
    }

    function TableData() {
        return <ITableData page = { search.search === "" ? getDataPit.setPage : search.setPage }
                           totalPage = { search.search === "" ? getDataPit.totalPage : search.totalPage }
                           loading = { search.search === "" ? getDataPit.loading : search.loading }
                           changePage = { index => {
                               if ( search.search === "" ) {
                                   getDataPit.setSetPage( index - 1 );
                                   getDataPit
                                       .getData( {
                                           page : index - 1,
                                           limit : 10
                                       } )
                                       .then( ( value ) => {
                                       } );
                               }
                               else {
                                   search.setSetPage( index - 1 );
                                   search
                                       .searchData( {
                                           page : index - 1,
                                           limit : 10,
                                           search : search.search
                                       } )
                                       .then( ( value ) => {
                                       } );
                               }
                           } }
                           info = { () => {
                           } }
                           updated = { () => {
                           } }
                           header = { getDataPit.header }
                           data = { search.search === "" ? getDataPit.pit : search.pit }/>
    }
};
export default PitView;
