import { useEffect, useState } from "react";
import { IConstantEnum } from "../../../../utils/enum/IConstantEnum";


const ServicesController = () => {
    const listCardInformationData = [
        {
            title : "Semua Data",
            total : 150,
            color : [ "border-info", 'text-info', 'bg-info' ]
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
    const [ role, setRole ] = useState( '' );
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
        role
    }
}
export default ServicesController
