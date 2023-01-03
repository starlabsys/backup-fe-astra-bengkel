import {
    IoMdHome,
    IoIosFolderOpen,
    IoMdPeople,
    IoMdSwitch,
    IoIosWarning,
    IoIosKey
} from "react-icons/io";
import { useEffect, useState } from "react";
import { getDataStorage } from "../../utils/localStorage/LocalStorage";
import { IConstantEnum } from "../../utils/enum/IConstantEnum";
import { FaWrench } from "react-icons/fa";
import { useRouter } from "next/router";
import { RoleEnum } from "../../utils/enum/RoleEnum";


export const SideBarVM = () => {
    const [ listSideBar, setListSideBar ] = useState( [
        // {
        //     title : "Dashboard",
        //     icon : <IoMdHome color = { `white` } size = { 30 }/>,
        //     path : "/"
        // },
        {
            title : "MasterData",
            icon : <IoIosFolderOpen color = { `white` } size = { 30 }/>,
            path : "/master-data",
            status : false,
            children : [
                // {
                // 	title: "Customer",
                // 	icon: <IoMdPeople color={`white`} size={25} />,
                // 	path: "/customer"
                // },
                // {
                // 	title: "Produk",
                // 	icon: <IoMdSwitch color={`white`} size={25} />,
                // 	path: "/produk"
                // }
            ]
        },
        {
            title : "Services",
            icon : <FaWrench color = { `white` } size = { 30 }/>,
            path : "/services"
        },
        {
            title : "Report",
            icon : <IoIosWarning color = { `white` } size = { 30 }/>,
            path : "/report"
        },
        {
            title : "Ubah Sandi",
            icon : <IoIosKey color = { `white` } size = { 30 }/>,
            path : "/change-password"
        }
    ] );

    const changeStatus = ( index : number ) => {
        listSideBar[ index ].status = !listSideBar[ index ].status;
    };

    const route = useRouter();
    const [ username, setUsername ] = useState( "" );
    const [ role, setRole ] = useState( "" );

    const getUsername = async () => {
        const dataUsername = await getDataStorage( IConstantEnum.username );
        if ( dataUsername !== "" ) {
            setUsername( dataUsername ?? "" );
        }
        const dataRole = await getDataStorage( IConstantEnum.role );
        if ( dataRole !== "" ) {
            setRole( dataRole ?? "" );
            if ( dataRole === RoleEnum.Admin ) {
                setListSideBar( ( prevState ) => {
                    return [
                        ...prevState,
                        {
                            title : "Add Admin",
                            icon : <IoMdPeople color = { `white` } size = { 30 }/>,
                            path : "/user"
                        }
                    ]
                } )
                // {
                //     title : "Dashboard",
                //     icon : <IoMdHome color = { `white` } size = { 30 }/>,
                //     path : "/"
                // },
            }
        }
    };

    useEffect( () => {
        getUsername().then( () => {
        } );
        return () => {
        };
    }, [] );

    return {
        listSideBar,
        changeStatus,
        username,
        role,
        route
    };
};
