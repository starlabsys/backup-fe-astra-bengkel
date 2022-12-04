import { Title2 } from "../styles/Style";
import Link from "next/link";
import { Card } from "@nextui-org/react";


interface Interface {
    title : string;
    path : string
    icon : JSX.Element;
    onClick? : () => void;
}

const ICard = ( props : Interface ) => {
    return <Link href = { props.path }>
        <Card isHoverable variant = { "bordered" } className = { `border border-primary` }>
            <div
                className = { `flex-1                                 
                                p-3 rounded-lg shadow-md 
                                hover:bg-primary text-primary hover:text-white flex place-items-center place-content-between cursor-pointer` }
                onClick = { props.onClick }>
                <div className = { `p-2 w-fit rounded-full bg-white border-2 border-primary` }>
                    { props.icon }
                </div>
                <div className = { `${ Title2 }` }>
                    { props.title }
                </div>
            </div>
        </Card>
    </Link>
}
export default ICard
