import PitRepository from "../../repository/pit/PitRepository";


class PitServices {
    public getData = async () => {
        return await PitRepository.get()
    }
}

export default new PitServices()
