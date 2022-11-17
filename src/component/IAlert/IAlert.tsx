import { Alert } from "@material-tailwind/react"


interface InterfaceAlert {
    message : string;
    type : "success" | "error" | "warning" | "info" | "primary";
}

export const IAlert = ( props : InterfaceAlert ) => {
    return <div className = "flex w-full flex-col gap-2">
        <Alert color = { props.type === 'success' ? 'green' :
            props.type === 'info' ? 'blue' :
                props.type === 'warning' ? 'amber' :
                    'red' }>{ props.message }</Alert>
    </div>
}
