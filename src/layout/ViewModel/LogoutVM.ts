import { removeDataStorage } from "../../utils/localStorage/LocalStorage";
import { useRouter } from "next/router";
import { removeICookies } from "../../utils/cookies/ICookies";
import { IConstantEnum } from "../../utils/enum/IConstantEnum";


const LogoutVM = () => {
    const route = useRouter()
    const logout = async () => {
        await removeDataStorage()
        await removeICookies( IConstantEnum.token )
        return route.replace( '/auth/login' )
    }
    return {
        logout
    }
}
export default LogoutVM
