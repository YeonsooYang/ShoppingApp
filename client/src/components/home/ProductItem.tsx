import { useState } from "react";
import { ProductItemProps } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { API_SERVER_DOMAIN } from "../../constants";

const ProductItem = ({product}:ProductItemProps) => {
    const navigate = useNavigate();

    const handlePushProductPage = () => navigate(`/product/${product.id}`);
    const handlePushPurchasePage = () => navigate(`/purchase/${product.id}`);

    // const {id,name,price,explanation}=product;
    // const [isEditMode, setIsEditMode]=useState(false);
    // const [editName,setEditName] = useState(product.name);
    // const[editExplanation, setEditExplanation] = useState(product.explanation);
    // const[editPrice, setEditPrice]=useState(product.price);

    return(
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{maxWidth:345, padding:3, height:300}} onClick={handlePushProductPage}>
               {product.thumbnail && (
                    <CardMedia 
                    sx={{height:140}}
                    image={`${API_SERVER_DOMAIN}/${product.thumbnail}`}
                    title={product.name}
                    />
               )}
                
                <CardContent sx={{padding:0}}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            overflow:'hidden',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                        }}
                    >
                        {product.name}</Typography>
                    <Typography>{product.price}</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            height:30,
                            overflow:'hidden',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                        }}
                    >{product.explanation}</Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'flex-end', marginTop:3 }}>
                    <Button size="small" variant="contained"
                    color="warning" onClick={handlePushPurchasePage}>구매하기</Button>
                </CardActions>  
            </Card>
            
            {
            /* {product.thumbnail && (
                <img 
                    src={product.thumbnail}
                />
            )}
            <div>
                <Link to={`/${id}`}>{name}</Link>
            </div>
            <div>{price}</div>
            <div>{explanation}</div>

            <button type="button" onClick={() => onDelete(id)}>
                삭제
            </button>

            <button type="button" onClick={()=> setIsEditMode((prev) => !prev)}>
                수정
            </button>

            {isEditMode && (
                <form
                onSubmit={(event)=>{
                    event.preventDefault();
                    onUpdate({
                        id,
                        name:editName,
                        price:editPrice,
                        explanation:editExplanation,
                    });
                }}>
                    <input 
                        type="text"
                        placeholder="상품 이름"
                        value={editName}
                        onChange={(event)=>setEditName(event.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="상품 설명"
                        value={editExplanation}
                        onChange={(event)=>setEditExplanation(event.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="상품 가격"
                        value={editPrice}
                        onChange={(event)=>setEditPrice(parseInt(event.target.value,10))}
                    />
                    <input type="submit" value="상품 수정하기" />
                </form>
            )} */}
        </Grid>
    );
};

export default ProductItem;