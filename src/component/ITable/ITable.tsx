interface InterfaceITable {
    body : string;
}

const ITable = ( props : InterfaceITable ) => {
    return <div className = { `px-4 h-full bg-white flex place-items-center place-content-center text-center` }>
        { props.body }
    </div>
}
export default ITable
