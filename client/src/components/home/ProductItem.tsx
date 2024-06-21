import { useState } from "react";
import { ProductItemProps } from "../../types";
import { Link } from "react-router-dom";

const ProductItem = ({product,onDelete,onUpdate}:ProductItemProps) => {
    const {id,name,price,explanation}=product;
    const [isEditMode, setIsEditMode]=useState(false);
    const [editName,setEditName] = useState(product.name);
    const[editExplanation, setEditExplanation] = useState(product.explanation);
    const[editPrice, setEditPrice]=useState(product.price);
    return(
        <div>
            <div>{id}</div>
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
            )}
        </div>
    );
};

export default ProductItem;