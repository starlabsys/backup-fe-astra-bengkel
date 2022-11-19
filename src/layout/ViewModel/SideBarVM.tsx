import { InterfaceSideBar } from "../interface/InterfaceSideBar";
import { IoMdHome, IoIosFolderOpen, IoMdPeople, IoMdSwitch, IoIosWarning } from "react-icons/io";
import { useEffect, useState } from "react";
import { getDataStorage } from "../../utils/localStorage/LocalStorage";
import { IConstantEnum } from "../../utils/enum/IConstantEnum";
import { getICookies } from "../../utils/cookies/ICookies";


export const SideBarVM = () => {
    const [ listSideBar, setListSideBar ] = useState( [
        {
            title : 'Dashboard',
            icon : <IoMdHome color = { `white` } size = { 30 }/>,
            path : '/'
        },
        {
            title : 'MasterData',
            icon : <IoIosFolderOpen color = { `white` } size = { 30 }/>,
            path : '',
            status : false,
            children : [
                {
                    title : 'Customer',
                    icon : <IoMdPeople color = { `white` } size = { 25 }/>,
                    path : '/customer'
                },
                {
                    title : 'Produk',
                    icon : <IoMdSwitch color = { `white` } size = { 25 }/>,
                    path : '/produk'
                },
            ]
        },
        {
            title : 'Report',
            icon : <IoIosWarning color = { `white` } size = { 30 }/>,
            path : '/report'
        },
    ] );

    const changeStatus = ( index : number ) => {
        listSideBar[ index ].status = !listSideBar[ index ].status;
    }

    const [ username, setUsername ] = useState( '' );
    const [ role, setRole ] = useState( '' );

    const getUsername = async () => {
        const dataUsername = await getDataStorage( IConstantEnum.username );
        if ( dataUsername !== "" ) {
            setUsername( dataUsername ?? '' );
        }
        const dataRole = await getDataStorage( IConstantEnum.role );
        if ( dataRole !== "" ) {
            setRole( dataRole ?? '' );
        }
    }

    useEffect( () => {
        getUsername().then( () => {

        } )
        return () => {
        };
    }, [] );


    return {
        listSideBar,
        changeStatus,
        username,
        role
    }
}
