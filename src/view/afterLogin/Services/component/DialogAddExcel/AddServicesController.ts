import { useContext, useState } from "react";
import { DialogDataContext } from "../../../../../context/IDialogData";
import PkbRepository from "../../../../../domain/repository/pkb/PkbRepository";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";
import { ILoadingContext } from "../../../../../component/ILoading/ILoading";
import { InterfaceDialogAddExcel } from "./DialogAddExcel";
import { ModelDataExcel } from "./interface/InterfaceSendDataExcel";
import FormatDate from "../../../../../utils/format/formatDate";


const AddServicesExcelController = ( loading : InterfaceDialogAddExcel ) => {
    const [ excel, setExcel ] = useState<[]>( [] );
    const dialog = useContext( DialogDataContext )
    const context = useContext( IAlertDialogContext )
    const loadingLottie = useContext( ILoadingContext );

    const sendExcel = async () => {
        // loadingLottie.openLoading( true );
        loading.loadingLottie.openLoading( true );
        const dataSend = excel.map( ( data : any ) => {
            let keysData = Object.keys( data );
            let newData = {};
            keysData.forEach( ( key : any, index ) => {
                // @ts-ignore
                const dataKey = key.toLowerCase().replaceAll( ' ', '_' ).replaceAll( '/', '' ).replaceAll( '(', '' ).replaceAll( ')', '' );
                // @ts-ignore
                newData[ dataKey ] = data[ key ];
            } )
            return newData;
        } )

        const sendData : ModelDataExcel[] = dataSend.map( ( data : any ) => {
            return {
                no : data.no,
                username : data.username,
                tanggal : FormatDate.dateExcel( data.tanggal ),
                jam_kedatangan_customer : FormatDate.dateExcel( data.jam_kedatangan_customer ),
                no_polisi__no_mesin : data.no_polisi__no_mesin,
                tipe_antrian : data.tipe_antrian,
                tipe_kedatangan : data.tipe_kedatangan,
                activity_capacity : data.activity_capacity,
                pemilik : data.pemilik,
                no_hp : data.no_hp,
                no_mesin : data.no_mesin,
                tahun_motor : data.tahun_motor,
                nama_pembawa : data.nama_pembawa,
                handphone_pembawa : data.handphone_pembawa,
                no_ktp_pembawa : data.no_ktp_pembawa,
                alamat_ktp_pembawa : data.alamat_ktp_pembawa,
                alamat_domisili : data.alamat_domisili,
                kota_pembawa : data.kota_pembawa,
                kecamatan_pembawa : data.kecamatan_pembawa,
                hubungan_dengan_pemilik : data.hubungan_dengan_pemilik,
                alasan_ke_ahass : data.alasan_ke_ahass,
                kilometer_sekarang : data.kilometer_sekarang,
                kilometer_berikutnya : data.kilometer_berikutnya,
                gudang : data.gudang,
                customer_yang_datang : data.customer_yang_datang,
                keluhan : data.keluhan,
                gejala_analisa_service_advisor : data.gejala_analisa_service_advisor,
                kode_jasa : data.kode_jasa,
                kode_spare_part : data.kode_spare_part,
                jumlah : data.jumlah,
                service_advisor : data.service_advisor,
                final_inspector : data.final_inspector,
                nama_pemilik : data.nama_pemilik,
                no_polisi : data.no_polisi,
                customer : data.customer,
                nama_tipe_kendaraan : data.nama_tipe_kendaraan,
                warna : data.warna,
                tahun_rakit : data.tahun_rakit,
                no_rangka : data.no_rangka,
                no_mesin_1 : data.no_mesin_1,
                title : data.title,
                nama : data.nama,
                no_ktp : data.no_ktp,
                alamat : data.alamat,
                provinsi : data.provinsi,
                kotakabupaten : data.kotakabupaten,
                kecamatan : data.kecamatan,
                kelurahan : data.kelurahan,
                no_hp_1 : data.no_hp_1,
                harga_jual : data.harga_jual,
            }
        } )

        // console.log( sendData )


        const resp = await PkbRepository.exportExcel( context, sendData )
        loading.loadingLottie.openLoading( false )
    }
    return {
        excel,
        setExcel,
        dialog,
        sendExcel
    }
}
export default AddServicesExcelController
