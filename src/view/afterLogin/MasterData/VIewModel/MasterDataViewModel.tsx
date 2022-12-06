import { InterfaceListMenuMasterData } from "../interfaces/InterfaceListMenuMasterData";
import { MdAccountBox, MdOutlineMiscellaneousServices, MdSupervisorAccount } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { FaDharmachakra } from "react-icons/fa";
import { IoIosBuild } from "react-icons/io";
import { IoAccessibility, IoCogSharp, IoPeopleCircle } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";


const MasterDataViewModel = () => {
    const listMenuCustomer : InterfaceListMenuMasterData[] = [
        {
            title : "Customer",
            link : "/master-data/customer",
            icon : <MdSupervisorAccount size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Kendaraan",
            link : "/master-data/kendaraan",
            icon : <BiCycling size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Tipe Kendaraan",
            link : "/master-data/tipe-kendaraan",
            icon : <FaDharmachakra size = { 60 } color = { `#1E2F65` }/>
        },
    ]

    const listMenuProduk : InterfaceListMenuMasterData[] = [
        {
            title : "Jasa",
            link : "/master-data/jasa",
            icon : <IoIosBuild size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Sparepart",
            link : "/master-data/sparepart",
            icon : <IoCogSharp size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Vendor",
            link : "/master-data/vendor",
            icon : <IoAccessibility size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Karyawan",
            link : "/master-data/karyawan",
            icon : <IoPeopleCircle size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "PIT",
            link : "/master-data/pit",
            icon : <MdOutlineMiscellaneousServices size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "PIT Karyawan",
            link : "/master-data/pit-karyawan",
            icon : <MdAccountBox size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Bengkel",
            link : "/master-data/Bengkel",
            icon : <AiFillShop size = { 60 } color = { `#1E2F65` }/>
        },

    ]

    return {
        listMenuCustomer,
        listMenuProduk
    }
}
export default MasterDataViewModel
