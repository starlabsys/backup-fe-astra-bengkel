import TambahBengkelView from "../../../view/afterLogin/Bengkel/TambahBengkelView/TambahBengkelView";
import MainLayout from "../../../layout/MainLayout";


const TambahBengkel = () => {
    return <MainLayout>
        <TambahBengkelView title = { 'Tambah Bengkel' } path = { 'tambah-bengkel' }/>
    </MainLayout>;
}

export default TambahBengkel
