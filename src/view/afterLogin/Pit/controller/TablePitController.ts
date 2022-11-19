import PitServices from "../../../../domain/services/PitServices/PitServices";
import { useEffect } from "react";


const TablePitController = () => {
    const getData = async () => {
        const resp = await PitServices.getData()
        console.log( resp )
    }

    useEffect( () => {
        getData().then( () => {
        } )
        return () => {
        }
    }, [] )
    return {}
}
export default TablePitController
