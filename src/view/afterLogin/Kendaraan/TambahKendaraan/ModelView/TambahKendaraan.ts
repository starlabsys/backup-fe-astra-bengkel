import { useContext, useState } from "react";
import kendaraanServices from "../../../../../domain/services/KendaraanServices/KendaraanServices";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";


interface InterfaceTambahKendaraanViewModel {
    id : number
    namaPemilik? : string;
    noPolisi? : string;
    customer? : string;
    status? : boolean;
    typeKendaraan? : string;
    warna? : string;
    tahunRakit? : string;
    noRangka? : string;
    noMesin? : string;
}

export const TambahKendaraanViewModel = ( props : InterfaceTambahKendaraanViewModel ) => {

    const context = useContext( IAlertDialogContext );

    const [ id, setId ] = useState( props.id ?? 0 );
    const [ namaPemilik, setNamaPemilik ] = useState( props.namaPemilik ?? '' );
    const [ noPolisi, setNoPolisi ] = useState( props.noPolisi ?? '' );
    const [ customer, setCustomer ] = useState( props.customer ?? '' );
    const [ status, setStatus ] = useState( props.status ?? true );
    const [ typeKendaraan, setTypeKendaraan ] = useState( props.typeKendaraan ?? '' );
    const [ warna, setWarna ] = useState( props.warna ?? '' );
    const [ tahunRakit, setTahunRakit ] = useState( props.tahunRakit ?? '' );
    const [ noRangka, setNoRangka ] = useState( props.noRangka ?? '' );
    const [ noMesin, setNoMesin ] = useState( props.noMesin ?? '' );

    const addKendaraan = async () => {
        const resp = await kendaraanServices.addKendaraan( context, {
            noMesin : noMesin,
            noPolisi : noPolisi,
            noRangka : noRangka,
            tahunMotor : tahunRakit,
            tipeComingCustomer : customer,
            informasiBensin : '45',
            kmTerakhir : 1000,
            kodeTipeUnit : typeKendaraan,
        } )
        if ( resp.statusCode === 'success' ) {
            setNamaPemilik( '' );
            setNoPolisi( '' );
            setCustomer( '' );
            setStatus( true );
            setTypeKendaraan( '' );
            setWarna( '' );
            setTahunRakit( '' );
            setNoRangka( '' );
            setNoMesin( '' );
        }
    }


    return {
        namaPemilik, setNamaPemilik,
        noPolisi, setNoPolisi,
        customer, setCustomer,
        status, setStatus,
        typeKendaraan, setTypeKendaraan,
        warna, setWarna,
        tahunRakit, setTahunRakit,
        noRangka, setNoRangka,
        noMesin, setNoMesin,
        addKendaraan
    }

}
