import { InterfaceListMenuCustomer } from "../InterfaceListMenuCustomer";
import { MdSupervisorAccount } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { FaDharmachakra } from "react-icons/fa";


const CustomerController = () => {
    const listMenuCustomer : InterfaceListMenuCustomer[] = [
        {
            title : "Customer",
            link : "/data-customer",
            icon : <MdSupervisorAccount size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Kendaraan",
            link : "/kendaraan",
            icon : <BiCycling size = { 60 } color = { `#1E2F65` }/>
        },
        {
            title : "Tipe Kendaraan",
            link : "/tipe-kendaraan",
            icon : <FaDharmachakra size = { 60 } color = { `#1E2F65` }/>
        },
    ]

    return {
        listMenuCustomer
    }
}
export default CustomerController
