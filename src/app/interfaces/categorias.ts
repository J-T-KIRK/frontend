export interface Category {
    _id?: string;
    name?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface RootCategorias {
    ok?: boolean;
    categories?: Category[];
}

export interface Categoria {
    _id?: string;
    name?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface RootCategoria {
    ok?: boolean;
    categoria?: Categoria;
}

export interface respuesta{
    ok?: boolean;
    message: string;
}