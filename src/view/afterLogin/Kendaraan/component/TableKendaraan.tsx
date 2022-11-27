import { MdModeEditOutline, MdInfo, MdDelete, MdKeyboardArrowDown } from "react-icons/md";
import ISizeBox from "../../../../component/ISizeBox/ISizeBox";
import KendaraanTableController from "../controller/KendaraanTableController";
import ITable from "../../../../component/ITable/ITable";
import { useEffect } from "react";


interface Interface {
    deleted? : () => void;
    updated? : () => void;
    info? : () => void;
    search : string;
}

const TableKendaraan = ( props : Interface ) => {

    const controller = KendaraanTableController( props.search );

    const page : JSX.Element[] = [];
    for ( let i = 0; i < controller.totalPage; i++ ) {
        if ( i < 4 ) {
            page.push( <div key = { i }
                            className = { `w-10 h-10 flex place-content-center 
                                place-items-center rounded-lg border border-primary hover:bg-primary hover:text-white
                                cursor-pointer ${ controller.page == i ? 'bg-primary text-white' : '' } ` }
                            onClick = { () => {
                                controller.setPage( i );
                                controller.getDataKendaraan( i, controller.dataRow, '' ).then( () => {
                                } );
                            } }>
                { i + 1 }
            </div> )
        }
        else if ( controller.page >= 4 ) {
            page.splice( 0, 1 );
            page.push( <div key = { i }
                            className = { `w-10 h-10 flex place-content-center 
                                place-items-center rounded-lg border border-primary hover:bg-primary hover:text-white
                                cursor-pointer ${ controller.page == i ? 'bg-primary text-white' : '' } ` }
                            onClick = { () => {
                                controller.setPage( i );
                                controller.getDataKendaraan( i, controller.dataRow, '' ).then( () => {
                                } );
                            } }>
                { i + 1 }
            </div> )


            // page.unshift( page[ 0 ], <div>
            //     ....
            // </div> )
            // page.push( <div>
            //     ....
            // </div> )
        }
        else {
            // page.map( ( item, index ) => {
            //     if ( !item.includes( item ) ) {
            // page.splice( i, 0 );

            // page.push( )

            // page.map( ( item, index ) => {
            //     if ( item !== point ) {
            //     }
            // } )
            // page.filter( ( item, index ) => {
            //     return item !== <div>
            //         ....
            //     </div>
            // } )
            // page.splice( i, 1 );
            //     }
            // } )
        }
    }
    if ( controller.totalPage !== controller.page + 1 ) {
        const point = <div>
            ......
        </div>
        page.push( point )
    }

    return <div className = { `flex-1 grid pb-10` }>
        <div className = { `px-5` }>
            <div className = { `border border-primary w-12 py-2 pl-1 flex place-items-center place-content-center rounded-lg cursor-pointer` }
                 onClick = { () => {
                     controller.setOpenRow( !controller.openRow )
                 } }>
                <div className = { `` }>{ controller.dataRow }</div>
                <MdKeyboardArrowDown size = { 20 }/>
            </div>
            {
                controller.openRow ?
                    <div className = { `flex-1 overflow-y-scroll scrollbar-hide py-1 shadow-lg bg-white rounded-lg h-40 absolute` }>
                        {
                            controller.row.map( ( item, index ) => {
                                return <div key = { index }
                                            className = { `py-2 px-2 cursor-pointer hover:bg-primary hover:text-white` }
                                            onClick = { () => {
                                                controller.setDataRow( item );
                                                controller.setOpenRow( false )
                                                controller.setPage( 0 );
                                                controller.getDataKendaraan( 0, item, '' ).then( () => {
                                                } )
                                            } }> { item }</div>
                            } )
                        }
                    </div>
                    : null
            }
        </div>
        <ISizeBox height = { 'h-5' }/>
        <div className = { `overflow-auto min-h-[200px] scrollbar-hide` }>
            <ITable loading = { controller.loading }
                    header = { [ 'No', 'No Polisi', 'No Mesin', 'No Rangka', 'Customer', 'Tipe', 'Warna', 'Tahun Rakit', 'Status', 'Action' ] }>
                {
                    controller.kendaraan.map( ( data, index ) => {
                        return <tr key = { index }
                                   className = { `${ index % 2 === 0 ? 'bg-white-secondary4' : 'bg-white' }` }>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ controller.page == 0 ? (index + 1) : (controller.dataRow * controller.page) + (index + 1) }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.noPolisi }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.noMesin }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.noRangka }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.customer }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.type }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.warna }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.tahunRakit }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px]` }>{ data.status }</td>
                            <td className = { `px-3 py-4 text-center whitespace-nowrap min-w-[60px] flex gap-2 place-items-center place-content-center` }>
                                <MdInfo size = { 25 }
                                        color = { '#20A8D8' }
                                        className = { `cursor-pointer` }
                                        onClick = { props.info }/>
                                <MdModeEditOutline size = { 25 }
                                                   color = { '#F0B900' }
                                                   className = { `cursor-pointer` }
                                                   onClick = { props.updated }/>
                                <MdDelete size = { 25 }
                                          color = { '#E21B1B' }
                                          className = { `cursor-pointer` }
                                          onClick = { props.deleted }/>
                            </td>
                        </tr>
                    } )
                }
            </ITable>
        </div>
        <hr/>
        <div className = { `mt-5 px-5 flex gap-2 place-content-end` }>
            <div className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                 onClick = { () => {
                     if ( controller.page >= 1 ) {
                         controller.setPage( controller.page -= 1 );
                         controller.getDataKendaraan( controller.page, controller.dataRow, '' ).then( () => {
                         } )
                     }
                 } }>
                Prev
            </div>
            <div className = { `grid grid-cols-2 gap-2 tablet:flex` }>
                {
                    page
                }
            </div>
            <div className = { `w-20 h-10 flex place-content-center place-items-center rounded-lg border border-primary cursor-pointer hover:bg-primary hover:text-white` }
                 onClick = { () => {
                     if ( controller.page + 1 < controller.totalPage ) {
                         controller.setPage( controller.page += 1 );
                         controller.getDataKendaraan( controller.page, controller.dataRow, '' ).then( () => {
                         } )
                     }
                 } }>
                Next
            </div>
        </div>
    </div>


}
export default TableKendaraan


