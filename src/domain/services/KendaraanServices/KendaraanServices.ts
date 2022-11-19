import MotoCycleRepository from "../../repository/motocycle/MotoCycleRepository";


class KendaraanServices {
    public getDataKendaraan = async () => {
        return await MotoCycleRepository.get()
    }
}

export default new KendaraanServices()
