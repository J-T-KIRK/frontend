export interface Product {
    available?: boolean;
    _id?: string;
    name?: string;
    description?: string;
    price?: number;
    enterprise?: string;
    category?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface RootProducto {
    ok?: boolean;
    products?: Product[];
}

export interface ProductOne {
    available?: boolean;
    _id?: string;
    name?: string;
    description?: string;
    price?: number;
    enterprise?: string;
    category?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface RootProducto1 {
    ok?: boolean;
    product?: ProductOne;
}
