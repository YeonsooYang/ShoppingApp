import { useEffect, useState } from "react"
import { ProductType } from "../../types"
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products,setProducts] = useState<ProductType[]>([]);


/*삭제*/
const handleDelete=(id:string) =>{
    fetch(`/product/${id}`,{
        method: 'DELETE',
    }).then((response)=>{
        if(response.ok){
            setProducts(products.filter((product) => product.id !== id));
        }
    });
};

/*수정*/
const handleUpdate =(updateProduct: ProductType) => {
    fetch(`/product/${updateProduct.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(updateProduct),
    }).then((response)=>{
        if(response.ok){
            setProducts(products.map((product)=>(
                product.id === updateProduct.id ? updateProduct : product
            )));
        }
    });
};

useEffect(()=>{
    fetch('/product')
    .then((response)=>response.json())
    .then((data)=>setProducts(data.products));
},[]);

return (
    <ul>
        {products.map((product)=>(
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          />
      ))}
    </ul>
);
};

export default ProductList;