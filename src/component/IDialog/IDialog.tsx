import { useState } from "react";


interface InterfaceIDialog {
    children? : JSX.Element;
    header? : JSX.Element;
}


const IDialog = ( props : InterfaceIDialog ) => {
    const [ open, setOpen ] = useState( true );
    return (
        <>
            {
                open ? <div>
                    <div
                        className = "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className = "relative w-auto my-6 mx-auto max-w-3xl">
                            <div className = "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {
                                    props.header ?? null
                                }
                                <div className = "relative p-6 flex-auto">
                                    { props.children }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div> : null
            }
        </>
    );
}
export default IDialog
