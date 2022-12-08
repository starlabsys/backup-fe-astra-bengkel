import TambahBengkelView from "../../../view/afterLogin/Bengkel/TambahBengkelView/TambahBengkelView";
import MainLayout from "../../../layout/MainLayout";


const EditBengkel = () => {
    return <MainLayout>
        <TambahBengkelView title = { 'Edit Bengkel' } path = { 'edit-bengkel' }/>
    </MainLayout>;
}

export default EditBengkel
