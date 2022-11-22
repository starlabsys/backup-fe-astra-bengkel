import ITitleMd from "../../../../component/ITitle/ITitleMd";
import IButton from "../../../../component/IButton/IButton";
import ITable from "../../../../component/ITable/ITable";


const JasaPKB = () => {
    return <div className = { `flex-1 grid gap-5 bg-white rounded-lg p-5` }>
        <ITitleMd title = { 'Jasa' }/>
        <div className = { `flex-1 flex place-content-end` }>
            <IButton size = { 'small' } rounded = { 'full' } status = { 'success' }>
                + Tambah Jasa
            </IButton>
        </div>
        
    </div>
}
export default JasaPKB
