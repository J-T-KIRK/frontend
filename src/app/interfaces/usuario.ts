export interface RootUsuario {
    ok?: boolean;
    token?: string;
}

export interface Usuario {
    _id?: string;
    nombre?: string;
    email?: string;
}

export interface RootUsuario2 {
    ok?: boolean;
    usuario?: Usuario;
}