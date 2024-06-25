
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types";
import { API_SERVER_DOMAIN } from "../constants";
import { Box } from "@mui/material";

const ProductPage = () => {
    const {productId} = useParams<{ productId: string }>();
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
            <Box sx={{display:"flex",justifyContent:"center",mb:4}}>
                {product?.thumbnail && (
                    <img 
                        src={`${API_SERVER_DOMAIN}/${product.thumbnail}`}
                        alt={product?.name}
                        style={{width: "100%", maxWidth:400}}
                    />
                )}
            </Box>
            <h1>{product?.name}상세페이지</h1>
            <p>{product?.explanation}</p>
            <span>{product?.price}원</span>
        </div>
        
    );
}

export default ProductPage;