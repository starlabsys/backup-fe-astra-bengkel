import { body3 } from "../styles/Style";


interface Interface {
    size : 'small' | 'medium' | 'large';
    children : string;
    rounded : 'full' | 'lg';
    textColor? : string
    status? : 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
    width? : 'w-40' | 'w-44' | 'w-52' | 'w-56' | 'w-60' | 'w-64' | 'w-72'
    type? : 'button' | 'submit' | 'reset';
    onClick? : () => void;
}

const IButton = ( props : Interface ) => {
    return <button
        onClick = { props.onClick }
        type = { props.type }
        className = { `${ body3 } px-5 hover:shadow-2xl ${ props.width ?? 'min-w-0 max-w-full' }
        ${ props.status === 'primary' ? 'bg-primary hover:bg-gray-800' : props.status === 'secondary' ?
            'bg-secondary2' : props.status === 'danger' ? 'bg-danger hover:bg-red-800' : props.status === 'success' ?
                'bg-success hover:bg-green-900' : props.status === 'warning' ? 'bg-warning hover:bg-amber-700' : props.status === 'info' ? 'bg-info hover:bg-blue-900' : 'bg-primary hover:bg-gray-800' } 
        ${ props.size === 'small' ? 'py-2' : props.size === 'large' ? 'py-4' : 'py-3' } 
        ${ props.rounded === 'lg' ? 'rounded-lg' : 'rounded-full' }  ${ props.textColor ?? 'text-white' }` }>
        { props.children }
    </button>;
}
export default IButton
