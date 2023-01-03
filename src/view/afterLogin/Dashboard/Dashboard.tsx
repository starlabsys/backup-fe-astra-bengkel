import CardDashboard from "./component/CardDashboard";
import image from '../../../../public/img/icon/icon-user-dashboard.png'
import Image from "next/image";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { Header1, Title1, Title4 } from "../../../component/styles/Style";
import { getDataStorage } from "../../../utils/localStorage/LocalStorage";
import { IConstantEnum } from "../../../utils/enum/IConstantEnum";


const DashboardView = () => {
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
        }
    };

    useEffect( () => {
        getUsername().then( () => {
        } );
        return () => {
        };
    }, [] );


    return <div className = { `grid gap-5` }>
        <div className = { `grid h-full tablet:h-72 tablet:flex w-full  rounded-lg bg-primary place-content-end` }>
            <div className = { `w-full p-5 text-white grid place-items-start place-content-start gap-2` }>
                <div className = { `${ Title4 }` }>
                    Selamat datang kembali,
                </div>
                <div className = { `${ Header1 }` }>
                    <b>{ username }</b>
                </div>
            </div>
            <div className = { `flex pt-5` }>
                <Image src = { image } alt = { 'image' } className = { `` }/>
            </div>
        </div>
        {/*<div className = { `laptop:hidden h-52 bg-primary rounded-lg p-5` }>*/ }
        {/*    1*/ }
        {/*</div>*/ }
        {/*<div className = { `w-full grid gap-5 tablet:grid-cols-2 laptop:grid-cols-4` }>*/ }
        {/*    <CardDashboard/>*/ }
        {/*    <CardDashboard/>*/ }
        {/*    <CardDashboard/>*/ }
        {/*    <CardDashboard/>*/ }
        {/*</div>*/ }
        {/*<div className = { `grid gap-5 laptop:flex` }>*/ }
        {/*    <div className = { `w-full h-72 rounded-lg bg-primary flex place-content-end` }>*/ }
        {/*        <Image src = { image } alt = { 'image' } className = { `w-6/12 pt-10` }/>*/ }
        {/*    </div>*/ }
        {/*    <div className = { `w-full h-72 rounded-lg bg-success` }>calender</div>*/ }
        {/*</div>*/ }
    </div>
}
export default DashboardView
