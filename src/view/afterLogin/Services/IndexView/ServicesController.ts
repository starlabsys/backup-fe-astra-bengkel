import { useContext, useEffect, useState } from "react";
import { IConstantEnum } from "../../../../utils/enum/IConstantEnum";
import { useRouter } from "next/router";
import { DialogDataContext } from "../../../../context/IDialogData";


const ServicesController = () => {
    const listCardInformationData = [
        {
            title : "Semua Data",
            total : 150,
            color : [ "border-Info", 'text-Info', 'bg-Info' ]
        },
        {
            title : "Proses",
            total : 150,
            color : [ "border-warning", 'text-warning', 'bg-warning' ]
        },
        {
            title : "Selesai",
            total : 150,
            color : [ "border-success", 'text-success', 'bg-success' ]
        },
    ]
    const dialog = useContext( DialogDataContext );
    const [ role, setRole ] = useState( '' );
    const route = useRouter()
    const getRole = async () => {
        const roleResult = await localStorage.getItem( IConstantEnum.role )
        setRole( roleResult ?? '' );
    }
    useEffect( () => {
        getRole().then( () => {
        } )
        return () => {
        }
    } )
    return {
        listCardInformationData,
        role,
        route,
        dialog
    }
}
export default ServicesController
