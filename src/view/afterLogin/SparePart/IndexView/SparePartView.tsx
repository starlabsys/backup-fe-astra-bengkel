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
                                    controller.getSparepart( 1, event.target.value )
                                } }
                                placeholder = { "Cari..." }
                                label = { "Cari Kode Sparepart" }
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
                    <ITableData header = { controller.header }
                                data = { controller.sparepart }
                                loading = { controller.loading }
                                totalPage = { controller.totalPage }
                                page = { controller.page - 1 }
                                changePage = { ( data ) => {
                                    controller.setPage( data );
                                    controller.getSparepart( data, '' );
                                } }
                                updated = { () => {
                                } }
                                info = { ( data ) => {
                                    route.push( {
                                        pathname : '/master-data/sparepart/' + data.id + '/info',
                                    } )
                                } }
                    />
                </div>

            </div>
        </div>
    );
};

export default SparePartView;
