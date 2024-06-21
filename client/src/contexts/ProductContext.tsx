import React, { createContext, useContext, useState } from "react";
import { ProductType } from "../interface";

type ProductContextType =[
    ProductType[],
    React.Dispatch<React.SetStateAction<ProductType[]>>
];

const ProductContext = createContext<ProductContextType | null>(null);

const initialValue:ProductType[] = [
        {
            id:"0",
            name:"iPhone 13 ProMax",
            explanation:'대충설명',
            price:1230000,
        },
];

export const ProductProvider = ({children,}: {children:React.ReactNode}) => {
    const productState = useState<ProductType[]>(initialValue);
    return(
        <ProductContext.Provider value={productState}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => {
   return useContext(ProductContext) as ProductContextType;
}









