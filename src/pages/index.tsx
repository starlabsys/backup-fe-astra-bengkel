import ISideBar from "../layout/ISideBar";
import IBody from "../layout/IBody";
import MainLayout from "../layout/MainLayout";
import DashboardView from "../view/afterLogin/Dashboard/Dashboard";


const Home = () => {
    return <MainLayout>
        <DashboardView/>
    </MainLayout>
}

export default Home
