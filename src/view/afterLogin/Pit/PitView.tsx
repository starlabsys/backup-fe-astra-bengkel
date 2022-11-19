import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import IButton from "../../../component/IButton/IButton";
import TablePit from "./component/TablePit";


const PitView = () => {
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'PIT' } subtitle = { 'pit' }/>
        <div className = { `w-full bg-white rounded-lg grid gap-5 relative` }>
            <div className = { `w-full grid gap-5 p-5` }>
                <ITitleMd title = { 'List Data PIT' }/>
                <div className = { `w-full flex place-content-end` }>
                    <IButton size = { 'small' } status = { 'success' } rounded = { "full" }>
                        + Tambah Pit
                    </IButton>
                </div>
            </div>
            <TablePit/>
        </div>
    </div>
}
export default PitView
