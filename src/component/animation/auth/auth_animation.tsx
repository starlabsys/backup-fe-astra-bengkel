import { useEffect, useState } from "react";
import ModelListImageLogin from "./models/model-list-image-login";
import Image from "next/image";

import logo1 from '../../../../public/img/logo-honda.png';
import logo2 from '../../../../public/img/img-ahas.png';
import logo3 from '../../../../public/img/img-ahas2.png';


interface AnimationLoginProps {
    width? : number
    height? : number
    color? : string
}

const AuthAnimation = ( props : AnimationLoginProps ) => {
    const { width, height, color } = props

    let listImage : ModelListImageLogin[];
    listImage = [
        new ModelListImageLogin( 1, logo1, "w-64 h-20" ),
        new ModelListImageLogin( 2, logo2, "w-40 h-full" ),
        new ModelListImageLogin( 3, logo3, "w-64 h-20" ),
    ];
    const [ state, setState ] = useState( listImage[ 0 ] );

    useEffect( () => {
        const id = setInterval( () => {
            if ( state.id === listImage[ 0 ].id ) {
                setState( listImage[ 1 ] )
            }
            else if ( state.id === listImage[ 1 ].id ) {
                setState( listImage[ 2 ] )
            }
            else {
                setState( listImage[ 0 ] )
            }
        }, 2000 )
        return () => clearInterval( id )

    }, [ listImage, state ] )

    return <>
        <div className = { `${ color }` }>
            <div className = { `h-40 w-full flex place-content-center place-items-center` }>
                <Image src = { state.img } alt = { state.id.toString() } className = { state.className }/>
            </div>
            <div className = "mt-5 text-white flex justify-center gap-1">
                <div className = { `${ state.id == 1 ? "w-4 h-1" : "w-1 h-1" } bg-white-secondary4 rounded-full` }></div>
                <div className = { `${ state.id == 2 ? "w-4 h-1" : "w-1 h-1" } bg-white-secondary4 rounded-full` }></div>
                <div className = { `${ state.id == 3 ? "w-4 h-1" : "w-1 h-1" } bg-white-secondary4 rounded-full` }></div>
            </div>
        </div>
    </>
}

export default AuthAnimation
