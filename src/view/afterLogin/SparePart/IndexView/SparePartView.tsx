import { ITextFieldDefault } from "../../../../component/ITextField/ITextField";
import IButton from "../../../../component/IButton/IButton";
import IBreadcrumbs from "../../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../../component/ITitle/ITitleMd";
import { ITableData } from "../../../../component/ITable/ITableNextUI";
import SparePartController from "./SparePartController";
import { useRouter } from "next/router";
import { InterfaceSparePart } from "../interfaces/InterfaceSparePart";


const SparePartView = () => {
    const controller = SparePartController();
    const route = useRouter();
    return (
        <div className = { `w-full grid gap-5` }>
            <IBreadcrumbs title = { `Sparepart` } subtitle = { `master-data/sparepart` }/>
            <div className = { `w-full rounded-lg bg-white grid relative` }>
                <div className = { `w-full p-5 grid gap-10` }>
                    <ITitleMd title = { "List Sparepart" }/>
                    <div
                        className = { `grid gap-5 tablet:flex tablet:place-items-end tablet:place-content-between` }
                    >
                        <div className = { `flex tablet:w-9/12 laptop:w-6/12` }>
                            <ITextFieldDefault
                                error = { false }
                                value = { undefined }
                                type = { "text" }
                                onChange = { ( event ) => {
                                    controller.changePage( {
                                        page : 0,
                                        search : event.target.value
                                    } )
                                } }
                                placeholder = { "Cari..." }
                                label = { "Cari" }
                                onEnter = { "enter" }
                            />
                        </div>
                        <div className = { `flex ` }>
                            <IButton size = { "medium" } rounded = { "lg" } status = { "success" } onClick = { () => {
                                route.push( "/master-data/sparepart/tambah-sparepart" ).then( () => {
                                } );
                            } }>
                                + Tambah Sparepart
                            </IButton>
                        </div>
                    </div>
                    <ITableData header = { [
                        {
                            label : "#",
                            name : "#",
                        },
                        {
                            label : "Kode",
                            name : "code",
                        },
                        {
                            label : "Nama",
                            name : "name",
                        },
                        {
                            label : "Group",
                            name : "group",
                        },
                        {
                            label : "Harga Ahass",
                            name : "price",
                        },
                        {
                            label : "Harga Nasional (HET)",
                            name : "priceNasional",
                        },
                        {
                            label : "Action",
                            name : "action"
                        }
                    ] } data = { controller.sparepart }
                                loading = { controller.loading }
                                totalPage = { controller.totalPage }
                                page = { controller.page }
                                changePage = { ( data ) => {
                                    controller.changePage( {
                                        page : data - 1,
                                        search : ''
                                    } );
                                } }
                                updated = { () => {
                                } }
                                info = { ( data ) => {
                                    route.push( {
                                        pathname : '/master-data/sparepart/edit-sparepart',
                                        query : data
                                    } ).then( () => {
                                    } );
                                } }
                    />
                </div>

            </div>
        </div>
    );
};

export default SparePartView;
