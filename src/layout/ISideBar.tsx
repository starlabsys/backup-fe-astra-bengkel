import logo from "../../public/img/logo2.png";
import logo2 from "../../public/img/logo-astra-only.png";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { body3, body4 } from "../component/styles/Style";
import ISizeBox from "../component/ISizeBox/ISizeBox";
import { SideBarVM } from "./ViewModel/SideBarVM";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import {
    InterfaceMiniSideBarContext,
    MiniSideBarContext
} from "../context/miniSideBarContext";
import Link from "next/link";
import { InterfaceChildSideBar } from "./interface/InterfaceSideBar";
import LogoutVM from "./ViewModel/LogoutVM";


const ISideBar = () => {
    const controller = SideBarVM();
    const sidebarController = useContext( MiniSideBarContext );
    const logout = LogoutVM();

    return (
        <div
            className = { `hidden laptop:flex ${
                sidebarController.miniSideBar ? "w-28" : "w-72"
            } bg-primary` }
        >
            <div
                className = { `${ sidebarController.miniSideBar ? "w-28" : "w-72" } h-full` }
            >
                <div
                    className = { `h-24 flex ${
                        sidebarController.miniSideBar
                            ? "place-content-between pl-2"
                            : "place-content-between"
                    } place-items-center bg-white` }
                >
                    { sidebarController.miniSideBar ? (
                        <Image src = { logo2 } className = { `w-14` } alt = { `logo` }/>
                    ) : (
                        <Image src = { logo } alt = { `logo` } className = { `w-56` }/>
                    ) }
                    <MdMenu
                        size = { 30 }
                        className = { `cursor-pointer` }
                        onClick = { () => {
                            sidebarController.setMiniSideBar( !sidebarController.miniSideBar );
                        } }
                    />
                </div>
                <div className = { `bg-primary w-full` }>
                    <div
                        className = { `h-24 flex place-items-center place-content-center w-full px-3` }
                    >
                        { sidebarController.miniSideBar ? (
                            <FaUserCircle size = { 35 } color = { "white" }/>
                        ) : (
                            <>
                                <FaUserCircle size = { 35 } color = { "white" }/>
                                <div
                                    className = { `flex-1 flex place-content-start place-items-center` }
                                >
                                    <ISizeBox width = { `w-2` }/>
                                    <div
                                        className = { `${ body4 } text-white cursor-pointer` }
                                        onClick = { () => {
                                            // controller.route.push("/profile");
                                        } }
                                    >
                                        { controller.username } /{ controller.role }
                                    </div>
                                </div>
                            </>
                        ) }
                    </div>
                    <div className = { `` }>
                        { controller.listSideBar.map( ( item, index ) => {
                            return (
                                <div key = { index }>
                                    <Link
                                        href = { item.path }
                                        onClick = { () => {
                                            if ( item.children !== undefined ) {
                                                controller.changeStatus( index );
                                            }
                                        } }
                                    >
                                        <div
                                            className = { `h-16 gap-2 text-white flex ${
                                                sidebarController.miniSideBar
                                                    ? "place-content-center"
                                                    : "pl-5"
                                            }  place-items-center  hover:bg-secondary2 ${ body3 }` }
                                        >
                                            <div>{ item.icon }</div>
                                            { sidebarController.miniSideBar ? null : (
                                                <div>{ item.title }</div>
                                            ) }
                                        </div>
                                    </Link>
                                    { item.status === true
                                        ? ChildSideBar( {
                                            data : item.children ?? [],
                                            sidebarController : sidebarController
                                        } )
                                        : null }
                                </div>
                            );
                        } ) }
                    </div>
                    <div
                        className = { `absolute bottom-0 ${
                            sidebarController.miniSideBar
                                ? "w-28 place-content-center"
                                : "w-72 pl-5"
                        } hover:bg-red-800 cursor-pointer h-16 flex-1 flex gap-2 place-items-center` }
                        onClick = { logout.logout }
                    >
                        <IoIosLogOut size = { 30 } color = { "white" }/>
                        { sidebarController.miniSideBar ? null : (
                            <div className = { `${ body3 } text-white ` }>Logout</div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

interface InterfaceChildSideBarProps {
    data : InterfaceChildSideBar[];
    sidebarController : InterfaceMiniSideBarContext;
}

const ChildSideBar = ( props : InterfaceChildSideBarProps ) => {
    return props.data.map( ( item, index ) => {
        return (
            <Link key = { index } href = { item.path }>
                <div
                    className = { `h-14 flex gap-2 ${
                        props.sidebarController.miniSideBar
                            ? "place-content-center place-items-center"
                            : "pl-10 place-content-start place-items-center"
                    } hover:bg-secondary2 text-white` }
                >
                    <div>{ item.icon }</div>
                    { props.sidebarController.miniSideBar ? null : <div>{ item.title }</div> }
                </div>
            </Link>
        );
    } );
};
export default ISideBar;
