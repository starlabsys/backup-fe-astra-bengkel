interface InterfaceValidateLogin {
    username : string;
    password : string;
}

export const ValidateLogin = ( props : InterfaceValidateLogin ) => {
    return props.username !== '' && props.password !== '';
}

