import { useContext } from "react";
import { IAlertDialogContext } from "../../../../../core/utils/error/IAlertDialog";


export const ValidationAddServicesPKB = () => {
    const context = useContext( IAlertDialogContext )

    const validationJasa = ( noMesin : string | number, kmSekarang : number | string, kmBerikutnya : number | string ) : boolean => {
        if ( noMesin === '' ) {
            context.onError( true )
            context.setOpen( true )
            context.giveMessage( 'Nomor mesin tidak boleh kosong' )
            return false
        }
        else {
            if ( noMesin !== undefined ) {
                // console.log( controller.pemilik?.noMesin )
                if ( kmSekarang !== undefined && kmBerikutnya !== undefined ) {
                    if ( kmSekarang !== '' && kmBerikutnya !== '' ) {
                        return true
                    }
                    else {
                        context.onError( true )
                        context.setOpen( true )
                        context.giveMessage( 'Kilometer tidak boleh kosong' )
                        return false
                    }
                }
                else {
                    context.onError( true )
                    context.setOpen( true )
                    context.giveMessage( 'Kilometer tidak boleh kosong' )
                    return false
                }
            }
            else {
                context.onError( true )
                context.setOpen( true )
                context.giveMessage( 'Nomor mesin tidak boleh kosong' )
                return false
            }
        }
    }

    return {
        validationJasa
    }
}
