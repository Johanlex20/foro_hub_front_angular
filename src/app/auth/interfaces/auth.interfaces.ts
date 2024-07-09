export interface SolicitudAutenticacion {
    email?: string;
    password?: string;
}

export interface RespuestaAutenticacion {
    token: string;
    usuario: Profile;
}

export interface Profile{
    id:number;
    nombre: string;
    email : string;
    password : string;
    role: 'USER' | 'ADMIN' ;
}

export interface SingupRequest{
    nombre: string;
    email : string;
    password : string;
    role: 'USER' | 'ADMIN' ;
    filePerfil: string;
}