import Image from "next/image";
import logoAstra1 from "../../../../../public/img/logo-honda.png"
import logoAstra2 from "../../../../../public/img/img-ahas.png"
import logoAstra3 from "../../../../../public/img/img-ahas2.png"
import { useState } from "react";


export const LogoAnimation = () => {
    const listLogo = [
        {
            id : 1,
            logo : logoAstra3,
            alt : "logoAstra"
        },
        {
            id : 2,
            logo : logoAstra2,
            alt : "logoAstra"
        },
        {
            id : 3,
            logo : logoAstra3,
            alt : "logoAstra"
        },
    ]
    const [ logo, setLogo ] = useState( listLogo[ 0 ] );
    return <div className = { `w-8/12 h-48 grid place-items-center place-content-center overflow-hidden gap-5` }>
        {
            listLogo.map( ( item, index ) => {
                return item.id === logo.id ?
                    <Image key = { index } src = { item.logo } alt = { item.alt }/> : null
            } )
        }
        <div className = { `flex gap-1` }>
            <div className = { `${ logo.id === 1 ? 'w-3' : 'w-1' }  h-1 bg-white rounded-full` }></div>
            <div className = { `${ logo.id === 2 ? 'w-3' : 'w-1' } h-1 bg-white rounded-full` }></div>
            <div className = { `${ logo.id === 3 ? 'w-3' : 'w-1' } h-1 bg-white rounded-full` }></div>
        </div>
    </div>
}
