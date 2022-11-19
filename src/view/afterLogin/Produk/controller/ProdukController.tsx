import { MdSupervisorAccount } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { FaDharmachakra, FaTools, FaRegSun } from "react-icons/fa";
import { InterfaceListProduk } from "../interfaces/InterfaceListProduk";
import { IoCogSharp, IoAccessibility, IoPeopleCircle } from "react-icons/io5";
import { IoIosBuild } from "react-icons/io";
import { MdAccountBox, MdOutlineMiscellaneousServices } from "react-icons/md";


const ProdukController = () => {
    const listMenuProduk : InterfaceListProduk[] = [
        {
            title : "Jasa",
            link : "/jasa",
            icon : <IoIosBuild size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Sparepart",
            link : "/sparepart",
            icon : <IoCogSharp size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Vendor",
            link : "/vendor",
            icon : <IoAccessibility size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Karyawan",
            link : "/karyawan",
            icon : <IoPeopleCircle size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "PIT",
            link : "/pit",
            icon : <MdOutlineMiscellaneousServices size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "PIT Mekanik",
            link : "/pit-mekanik",
            icon : <MdAccountBox size = { 60 } color = { `#1E2F65` }/>
        },

    ]
    return {
        listMenuProduk
    }
}
export default ProdukController
