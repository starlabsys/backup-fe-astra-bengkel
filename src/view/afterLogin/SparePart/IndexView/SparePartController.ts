import { useContext, useEffect, useState } from "react";
import { InterfaceSparePart } from "../interfaces/InterfaceSparePart";
import SparePartServices from "../../../../domain/services/SparePartServices/SparePartServices";
import { IAlertDialogContext } from "../../../../core/utils/error/IAlertDialog";
import SparepartRepository from "../../../../domain/repository/sparepart/SparepartRepository";
import { ListofSparePart } from "../../../../domain/models/SparePart/ModelListSparePart";
import Currency from "../../../../utils/format/currency";


interface InterfaceGetDataSparepart {
    page : number;
    search? : string;
}

const SparePartController = () => {
    const header = [
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
    ]

    const context = useContext( IAlertDialogContext );
    const [ sparepart, setSparepart ] = useState<InterfaceSparePart[]>( [] as InterfaceSparePart[] );
    const [ loading, setLoading ] = useState( false );
    const [ totalPage, setTotalPage ] = useState( 0 );
    const [ page, setPage ] = useState( 1 );

    const getSparepart = async ( pageNumber : number, kodeSparePart : string ) => {
        setLoading( true )
        const resp = await SparepartRepository.get( context, {
            action : 0,
            namaSparepart : '',
            kodeSparepart : kodeSparePart,
            pageNumber : pageNumber,
            pageSize : 10,
            totalRow : 100,
            sortColumn : 'ID',
            sortDirection : 0,
        } );
        if ( resp !== null ) {
            setSparepart( resp.data.listofSparePart.map( ( item : ListofSparePart ) : InterfaceSparePart => {
                return {
                    id : item.id,
                    code : item.kodeSparepart,
                    name : item.namaSparepart,
                    namaLokal : item.namaLokalSparepart,
                    price : Currency.stringToIdr( item.hargaLokal.toString() ),
                    status : item.aktif,
                    qty : item.stok,
                    priceNasional : Currency.stringToIdr( item.hargaNasional.toString() ),
                    group : item.grupSparepart,
                }
            } ) );
            setTotalPage( Number( (resp.data.totalRow / 10).toFixed() ) + 1 );
        }
        setLoading( false )
    }

    useEffect( () => {
        getSparepart( page, '' )
        return () => {
            getSparepart( page, '' )
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );


    return {
        header,
        sparepart,
        loading,
        totalPage, page, setPage,
        getSparepart
    }

}
export default SparePartController
