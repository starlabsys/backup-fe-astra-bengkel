import { createContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ISizeBox from "../../component/ISizeBox/ISizeBox";
import { body4, bodyLabel1, bodyLabel2, bodyLabel3 } from "../../component/styles/Style";
import { SideBarVM } from "../ViewModel/SideBarVM";
import Link from "next/link";
import { InterfaceChildSideBar } from "../interface/InterfaceSideBar";
import { IoIosLogOut } from "react-icons/io";
import LogoutVM from "../ViewModel/LogoutVM";


interface Interface {
    children : JSX.Element;
}

interface InterfaceIDrawer {
    openDrawer : boolean;
    setOpenDrawer : ( value : boolean ) => void;
}

export const IDrawerContext = createContext( {} as InterfaceIDrawer );

const IDrawer = ( props : Interface ) => {
    const [ state, setState ] = useState( false );
    const controller = SideBarVM();
    const logout = LogoutVM()

    return <IDrawerContext.Provider value = { { openDrawer : state, setOpenDrawer : setState } }>
        <>
            { props.children }
            {
                state ? <div className = { `h-screen w-screen absolute` }>
                    <div className = { `w-screen h-screen absolute bg-black opacity-50` } onClick = { () => {
                        setState( false )
                    }
                    }>
                    </div>
                    <div className = { `absolute w-8/12 tablet:w-6/12 bg-primary h-screen relative` }>
                        <div className = { `w-full flex gap-2 place-content-center place-items-center h-24 pl-5 pr-1` }>
                            <FaUserCircle size = { 35 } color = { 'white' }/>
                            <div className = { `flex-1 flex place-content-start place-items-center` }>
                                <ISizeBox width = { `w-2` }/>
                                <div className = { `flex-1 grid gap-1` }>
                                    <div className = { `${ bodyLabel1 } text-white` }>
                                        Medianto Pratama Pentadakosta
                                    </div>
                                    <div className = { `${ body4 } text-white` }>
                                        Super Admin
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className = { `mt-5` }>
                            {
                                controller.listSideBar.map( ( item, index ) => {
                                    return <div key = { index }>
                                        <Link key = { index } href = { item.path } onClick = {
                                            () => {
                                                if ( item.children !== undefined ) {
                                                    controller.changeStatus( index );
                                                }
                                            }
                                        }>
                                            <div key = { index }
                                                 className = { `py-5 hover:bg-secondary2 pl-5 flex gap-2 place-items-center place-content-start` }>
                                                { item.icon }
                                                <div className = { `${ bodyLabel2 }  text-white` }>
                                                    { item.title }
                                                </div>
                                            </div>

                                        </Link>
                                        {
                                            item.status ? <ChildSideBar data = { item.children }/> : null
                                        }
                                    </div>
                                } )
                            }
                        </div>
                        <div className = { `absolute bottom-0 py-5 flex gap-2 place-items-center pl-5 hover:bg-danger cursor-pointer w-full` }
                             onClick = {
                                 logout.logout
                             }>
                            <IoIosLogOut size = { 30 } color = { 'white' }/>
                            <div className = { `${ bodyLabel2 } text-white ` }>Logout</div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    </IDrawerContext.Provider>
}

interface InterfaceChildSideBarProps {
    data : InterfaceChildSideBar[]
}

const ChildSideBar = ( props : InterfaceChildSideBarProps ) => {
    return props.data !== undefined ?
        <div className = { `grid` }>
            {
                props.data.map( ( data, index ) => {
                    return <Link key = { index } href = { data.path }>
                        <div key = { index }
                             className = { `py-4 pl-8 hover:bg-secondary2 flex gap-1 place-content-start place-items-center ${ bodyLabel3 } text-white cursor-pointer` }>
                            { data.icon }
                            { data.title }
                        </div>
                    </Link>
                } )
            }
        </div> : null
}
export default IDrawer
