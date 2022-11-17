import { StaticImageData } from "next/image";


class ModelListImageLogin {
    id : number
    img : StaticImageData
    className : string

    constructor( id : number, img : StaticImageData, className : string ) {
        this.id = id
        this.img = img
        this.className = className
    }
}

export default ModelListImageLogin
