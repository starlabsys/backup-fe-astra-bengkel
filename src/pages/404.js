import ImageLottie from "../component/lottie/image-lottie";
import error from '../../public/lottie/404-page.json'
import Image from "next/image";
import logo from '../../public/img/logo2.png'

export default function Custom404() {
    return <div className = {`h-screen w-screen grid place-content-center place-items-center`}>
        <Image src = {logo} alt = {'logo'} width = {500} height = {200}/>
        <ImageLottie file = {error} size = {`w-11/12`}/>
    </div>
}
