import ISpinLoading from "../../component/animation/ISpinLoading/ISpinLoading";


interface Interface {
    header : string[];
    children : JSX.Element[];
    loading : boolean;
    deleted? : () => void;
    updated? : () => void;
    info? : () => void;
}

const ITable = ( props : Interface ) => {
    const loading : JSX.Element = <tbody>
    <tr>
        <td className = { `py-4` } colSpan = { 10 }>
            <div className = { `w-full flex place-content-center place-items-center` }>
                <ISpinLoading/>
            </div>
        </td>
    </tr>
    </tbody>
    return <table className = { `w-full` }>
        <thead className = { `bg-primary text-white` }>
        <tr>
            {
                props.header.map( ( item, index ) => {
                    return <th key = { index } className = { `px-3 py-5 text-center whitespace-nowrap` }>{ item }</th>
                } )
            }
        </tr>
        </thead>
        {
            props.loading ? loading : <tbody>
            { props.children }
            </tbody>
        }
    </table>
}
export default ITable
