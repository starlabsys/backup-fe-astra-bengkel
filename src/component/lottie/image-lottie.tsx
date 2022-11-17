import Lottie from "lottie-react";


interface InterfaceImageLottie {
    file : any;
    size? : string;
}

const ImageLottie = ( props : InterfaceImageLottie ) => {
    return <Lottie animationData = { props.file } loop = { true } className = { `${ props.size ?? 'w-40' }` }/>;
}

export default ImageLottie;
