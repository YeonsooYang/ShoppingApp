
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { ProductType } from "../interface";

const ProductPage = () => {
    const {productId} = useParams<{ productId: string }>();
    //const context = useProductContext();
    //const [products] = useProductContext();
    //const foundProduct = products.find((product)=> product.id === parseInt(productId!,10));
    const [product,setProduct] = useState<ProductType | null>(null); 

    useEffect(()=>{
        fetch(`/product/${productId}`)
        .then((response)=>response.json())
        .then((data)=>setProduct(data.product));
    },[productId]);

    if(!product){
        return <h1>찾으시는 상품이 없습니다.</h1>;
    }
    return(
        <div>
            <h1>{product?.name}상세페이지</h1>
            <p>{product?.explanation}</p>
            <span>{product?.price}원</span>
        </div>
        
    );
}

export default ProductPage;