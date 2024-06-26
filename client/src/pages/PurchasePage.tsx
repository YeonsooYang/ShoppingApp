import { Button, Card, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { API_SERVER_DOMAIN } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "../types";

type ParamsType = {
    productId:string;
}

const PurchasePage = () => {
    const {productId} = useParams<ParamsType>();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        fetch(`/product/${productId}`)
        .then((response)=>response.json())
        .then((data)=>setProduct(data.product));
    },[productId]);

    if(!product){
        return <h1>찾으시는 상품이 없습니다.</h1>
    }

    return(
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{marginBottom:4}}>
                구매하기
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{display:'flex', marginBottom:2}}>
                        {product?.thumbnail &&(
                            <CardMedia 
                                sx={{width:100, height:100, marginRight:2}}
                                image={`${API_SERVER_DOMAIN}/${product?.thumbnail}`}
                                title="Product"
                            />
                        )}
                        <CardContent>
                            <Typography variant="h6">{product?.name}</Typography>
                        </CardContent>
                    </Card>

                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="구매자 이름" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="구매자 이메일" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="배송 주소" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>결제 정보</InputLabel>
                                    <Select label="결제 정보">
                                        <MenuItem value={10}>신용카드 / 체크카드</MenuItem>
                                        <MenuItem value={20}>무통장 입금</MenuItem>
                                        <MenuItem value={30}>휴대폰 결제</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" fullWidth>
                                    구매 완료
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PurchasePage;