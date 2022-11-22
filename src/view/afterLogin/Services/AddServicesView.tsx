import { ITextFieldDefault } from "../../../component/ITextField/ITextField";
import IButton from "../../../component/IButton/IButton";
import { useContext } from "react";
import { DialogDataContext } from "../../../context/IDialogData";
import IBreadcrumbs from "../../../component/IBreadcrumbs/IBreadcrumbs";
import ITitleMd from "../../../component/ITitle/ITitleMd";
import IDropDown, { InterfacePropsDropDown } from "../../../component/ITextField/IDropDown";


const AddServicesView = () => {
    const dialog = useContext( DialogDataContext )
    const testData : InterfacePropsDropDown[] = [
        {
            id : 1,
            name : 'test1',
            value : 'test1'
        },
        {
            id : 2,
            name : 'test2',
            value : 'test2'
        },
        {
            id : 3,
            name : 'test3',
            value : 'test3'
        },
        {
            id : 4,
            name : 'test4',
            value : 'test4'
        },
        {
            id : 5,
            name : 'test5',
            value : 'test5'
        },
        {
            id : 6,
            name : 'test6',
            value : 'test6'
        },
        {
            id : 7,
            name : 'test7',
            value : 'test7'
        },
        {
            id : 8,
            name : 'test8',
            value : 'test8'
        },
    ];
    return <div className = { `flex-1 grid gap-5` }>
        <IBreadcrumbs title = { 'Pendaftaran Servis' } subtitle = { ' Tambah PKB' }/>
        <div className = { `grid gap-5 grid-cols-2` }>
            <ITextFieldDefault type = { 'text' }
                               onChange = { () => {
                               } }
                               placeholder = { 'No PKB' }
                               label = { 'PKB' }
                               labelColor = { 'text-white' }
                               backgroundLabel = { 'bg-primary' }
                               onEnter = { 'next' }/>
            <ITextFieldDefault type = { 'text' }
                               onChange = { () => {
                               } }
                               placeholder = { 'No Antrian' }
                               label = { 'Antrian' }
                               labelColor = { 'text-white' }
                               backgroundLabel = { 'bg-primary' }
                               onEnter = { 'next' }/>
            <ITextFieldDefault type = { 'text' }
                               onChange = { () => {
                               } }
                               placeholder = { 'PKB Return' }
                               label = { 'PKB Return' }
                               labelColor = { 'text-white' }
                               backgroundLabel = { 'bg-primary' }
                               onEnter = { 'next' }/>
        </div>
        <div className = { 'flex-1 bg-white rounded-lg p-5 grid gap-5' }>
            <ITitleMd title = { 'Pencarian PKB' }/>
            <div className = { `grid grid-cols-2 gap-5` }>
                <ITextFieldDefault type = { 'date' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Tanggal' }
                                   onEnter = { 'next' }/>
                <ITextFieldDefault type = { 'time' }
                                   onChange = { () => {
                                   } }
                                   label = { 'Jam Kedatangan Cutomer' }
                                   onEnter = { 'next' }/>

                <IDropDown
                    type = { 'text' }
                    onEnter = { 'next' }
                    label = { 'No Polisi / No Mesin' }
                    data = { testData }
                    onValueChange = { ( value ) => {
                        console.log( value )
                    } }
                />
                <ITextFieldDefault type = { 'time' }
                                   onChange = { () => {
                                   } }
                                   label = { 'No Polisi / No Mesin' }
                                   placeholder = { 'Masukan No Polisi / No Mesin ' }
                                   onEnter = { 'next' }/>
            </div>
        </div>
    </div>
}
export default AddServicesView
