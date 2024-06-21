import { useEffect, useRef, useState } from "react";
import "../style.scss";
import { ProductType } from "../interface";
import ProductItem from "../ProductItem";
import { useProductContext } from "../contexts/ProductContext";

const HomePage = () => {
    useEffect(()=>{
        fetch('/product')
        .then((response)=>response.json())
        .then((data)=>setProducts(data.products));
    },[]);
  /*서버 구동시 불필요 
  const [상태값,상태값지정] = useState(초기값);
  */
  const [products,setProducts] = useState<ProductType[]>([]);
  
const [name,setName] = useState('');
const [explanation,setExplanation] = useState('');
const [price, setPrice] = useState(0);

const fakeId = useRef(0);
/*상품생성*/
const handleCreate = (newProduct:Omit<ProductType,"id">) => {
  fetch('/product',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(newProduct),
  }).then((response)=>response.json())
  .then((data)=>{
    setProducts((prev)=>[...prev, data.product]);
  });
};

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

  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate({
        name,
        explanation,
        price
      });
    }}>
      <input 
      value={name}
      onChange={(e)=>setName(e.target.value)} type="text" placeholder="상품명"/>
      <input 
      value={explanation}
      onChange={(e)=>setExplanation(e.target.value)} type="text" placeholder="상품설명"/>
      <input 
      value={price}
      onChange={(e)=>setPrice(parseInt(e.target.value))} type="number" placeholder="상품가격"/>
      <input type="submit" value="상품등록"/>
    </form>
      {products.map((product)=>(
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          />
      ))}
    </>
  );
}
export default HomePage;