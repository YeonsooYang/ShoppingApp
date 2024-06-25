export interface ProductType {
    id:string;
    name:string;
    explanation:string;
    price:number;
    thumbnail?:string;
}

export interface ProductItemProps {
    product:ProductType;
    // onDelete:(id:string) => void;
    // onUpdate:(product:ProductType) => void;
}