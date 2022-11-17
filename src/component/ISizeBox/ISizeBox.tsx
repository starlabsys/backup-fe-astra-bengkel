interface InterfaceIsSizeBox {
    width? : number | string;
    height? : number | string;
}

const ISizeBox = ( props : InterfaceIsSizeBox ) => {
    return <div className = { `${ props.width ?? 'w-5' } ${ props.height ?? 'h-5' }` }>

    </div>
}
export default ISizeBox
