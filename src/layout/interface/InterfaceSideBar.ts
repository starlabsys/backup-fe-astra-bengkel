export interface InterfaceSideBar {
    title : string
    icon : JSX.Element
    path : string
    status? : boolean
    children? : InterfaceChildSideBar[]
}

export interface InterfaceChildSideBar {
    title : string
    icon : JSX.Element
    path : string
}
