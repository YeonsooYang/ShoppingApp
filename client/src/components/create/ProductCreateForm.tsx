import { useState } from "react";
import { ProductType } from "../../types";

const ProductCreateForm = () => {
    const [name,setName] = useState('');
    const [explanation,setExplanation] = useState('');
    const [price, setPrice] = useState(0);

    /*상품생성*/
    const handleCreate = (newProduct:Omit<ProductType,"id">) => {
      fetch('/product',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(newProduct),
      })
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
      });
};

return(
    <form onSubmit={(e)=>{
        e.preventDefault();
        handleCreate({
          name,
          explanation,
          price
        });
      }}>
        <input 
        onChange={(e)=>setName(e.target.value)} type="text" placeholder="상품명"/>
        <input 
        onChange={(e)=>setExplanation(e.target.value)} type="text" placeholder="상품설명"/>
        <input 
        onChange={(e)=>setPrice(parseInt(e.target.value))} type="number" placeholder="상품가격"/>
        <input type="submit" value="상품등록"/>
      </form>
    );
  }

  export default ProductCreateForm;