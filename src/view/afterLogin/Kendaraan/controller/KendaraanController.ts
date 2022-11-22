import { useState } from "react";


const KendaraanController = () => {
    const [ search, setSearch ] = useState( '' );
    return {
        search,
        setSearch
    }
}
export default KendaraanController
