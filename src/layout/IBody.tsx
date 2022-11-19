import Image from "next/image";
import logo from '../../public/img/logo2.png'
import ahass from '../../public/img/img-ahas2.png'
import { MdMenu } from "react-icons/md";
import { useContext } from "react";
import { IDrawerContext } from "./IDrawer/IDrawer";


interface InterfaceIBody {
    children : JSX.Element;
}

const IBody = ( props : InterfaceIBody ) => {
    const context = useContext( IDrawerContext );
    return <div className = { `flex-1` }>
        <div className = { `h-24 bg-white flex place-content-between place-items-center px-4 laptop:px-0` }>
            <MdMenu size = { 30 }
                    color = { `black` }
                    className = { `laptop:hidden cursor-pointer` }
                    onClick = { () => {
                        context.setOpenDrawer( !context.openDrawer )
                    } }/>
            <div className = { `w-56 laptop:hidden` }>
                <Image src = { logo } alt = { 'logo' }/>
            </div>
            <MdMenu size = { 30 } className = { `invisible laptop:hidden` }/>
            <div className = { `hidden laptop:flex w-full place-content-end` }>
                <div className = { `w-32` }>
                    <Image src = { ahass } alt = { `logo 2` }/>
                </div>
            </div>
        </div>
        <div className = { `w-full h-full flex-1 overflow-auto px-5 pt-5 bg-white-secondary relative` }>
            { props.children }
            <div className = { `w-full h-36` }>
            </div>
        </div>
    </div>
}
export default IBody
