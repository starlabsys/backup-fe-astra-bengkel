import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';


export const TambahCustomerViewModel = () => {

    const [ title, setTitle ] = useState( '' );

    const formik = useFormik( {
        initialValues : {
            kode : '',
            active : true,
            title : '',
            nama : '',
            ktp : '',
            pekerjaan : '',
            agama : '',
            tglLahir : '',
            noPassport : '',
            alamat : '',
            provinsi : '',
            kota : '',
            kecamatan : '',
            kelurahan : '',
            kodePos : '',
            noTelp : '',
            noHp : '',
            noFaks : '',
            email : '',
            website : '',
            facebook : '',
            twitter : '',
            instagram : '',
            groupDiskon : '',
            picAhass : '',
            catatan : '',
            kontakPersonNama : '',
            kontakPersonNoTlp : '',
            kontakPersonNoHp : '',
            kontakPersonEmail : '',
            kontakPersonJabatan : '',
            tempo : '',
            limitKredit : '',
            alamatKirim : '',
            up : '',
            alamatNoTlp : '',
            npwp : '',
            nppkp : '',
            alamatPajak : '',
        },
        validateOnChange : true,
        onSubmit : ( values ) => {
            console.log( formik.values )
        },
        validationSchema : yup.object().shape( {
            kode : yup.string().trim(),
            active : yup.string().trim(),
            title : yup.string().trim().required( 'Title tidak boleh kosong' ),
            nama : yup.string().trim().required( 'Nama tidak boleh kosong' ).matches( /^[a-zA-Z ]*$/, 'Nama hanya boleh huruf' ),
            ktp : yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ).required( 'KTP tidak boleh kosong' ).length( 16, "KTP harus 16 digits" ),
            pekerjaan : yup.string().trim(),
            agama : yup.string().trim(),
            tglLahir : yup.string().trim(),
            noPassport : yup.string().trim(),
            alamat : title === 'Tuan' || title === 'Nyonya' || title === 'Perusahaan' ? yup.string().trim().required( 'Alamat tidak boleh kosong' ) : yup.string().trim(),
            provinsi : title === 'Tuan' || title === 'Nyonya' || title === 'Perusahaan' ? yup.string().trim().required( 'Provinsi tidak boleh kosong' ) : yup.string().trim(),
            kota : title === 'Tuan' || title === 'Nyonya' || title === 'Perusahaan' ? yup.string().trim().required( 'Kota/Kabupaten tidak boleh kosong' ) : yup.string().trim(),
            kecamatan : title === 'Tuan' || title === 'Nyonya' || title === 'Perusahaan' ? yup.string().trim().required( 'Kecamatan tidak boleh kosong' ) : yup.string().trim(),
            kelurahan : title === 'Tuan' || title === 'Nyonya' || title === 'Perusahaan' ? yup.string().trim().required( 'Kelurahan tidak boleh kosong' ) : yup.string().trim(),
            kodePos : yup.string().trim(),
            noTelp : title === 'Perusahaan' ? yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ).required( 'No tlp tidak boleh kosong' ) : yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ),
            noHp : title === 'Tuan' || title === 'Nyonya' ?
                yup.string().trim().matches(
                    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                    "Hanya Boleh Angka"
                ).min( 11, ( { min } ) => `No. Hp tidak boleh kurang dari ${ min }` ).max( 13,
                    ( { max } ) => `No. Hp tidak boleh lebih dari ${ max }` ).matches(
                    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                    "Hanya Boleh Angka"
                ).required( 'No. HP tidak boleh kosong' )
                :
                yup.string().trim().min( 11, ( { min } ) => `No. Hp tidak boleh kurang dari ${ min }` ).max( 13,
                    ( { max } ) => `No. Hp tidak boleh lebih dari ${ max }` ).matches(
                    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                    "Hanya Boleh Angka"
                ),
            noFaks : yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ),
            email : yup.string().trim().email( 'Email tidak valid' ),
            website : yup.string().trim(),
            facebook : yup.string().trim(),
            twitter : yup.string().trim(),
            instagram : yup.string().trim(),
            groupDiskon : yup.string().trim(),
            picAhass : yup.string().trim(),
            catatan : yup.string().trim(),
            kontakPersonNama : title === 'Perusahaan' ? yup.string().trim().required( 'Nama tidak boleh kosong' ) : yup.string().trim(),
            kontakPersonNoTlp : yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ),
            kontakPersonNoHp : title === 'Perusahaan' ? yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ).required( 'No. HP tidak boleh kosong' ) : yup.string().trim(),
            kontakPersonEmail : yup.string().trim().email( 'Email tidak valid' ),
            kontakPersonJabatan : yup.string().trim(),
            tempo : yup.string().trim(),
            limitKredit : yup.string().trim(),
            alamatKirim : yup.string().trim(),
            up : yup.string().trim(),
            alamatNoTlp : yup.string().trim().matches(
                /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                "Hanya Boleh Angka"
            ),
            npwp : title === 'Perusahaan' ? yup.string().trim().required( 'NPWP tidak boleh kosong' ) : yup.string().trim(),
            nppkp : yup.string().trim(),
            alamatPajak : yup.string().trim(),
        } ),
    } );
    const kontakPerson = () => {
        formik.setFieldValue( 'kontakPersonNama', formik.values.nama );
        formik.setFieldValue( 'kontakPersonNoTlp', formik.values.noTelp );
        formik.setFieldValue( 'kontakPersonNoHp', formik.values.noHp );
        formik.setFieldValue( 'kontakPersonEmail', formik.values.email );
    }

    useEffect( () => {
        return () => {
        };
    }, [ formik.values ] );


    const tambahCustomer = async () => {
    }

    return {
        formik,
        kontakPerson,
        tambahCustomer,
        setTitle,
    }
}
