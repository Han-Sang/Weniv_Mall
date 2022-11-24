// ProductList.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductData } from "../../api/api";
import Product from "../Product/Product";
import { ProductListWrapper } from "./styled";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData().then((data) => {
      setProductData(data);
    });
  }, []);

    // 좋아요 버튼 기능
    const onClickLikeBtn = (setState) =>{
        // setter함수에는 콜백함수가 들어갈 수 있음 -> 기존값을 가져올 수 있게 함
        setState((prev) => !prev);
    };

    return (
        <ProductListWrapper>
          {productData.map((item) => (
            <Product key={item.id} data={item} onClickLikeBtn={onClickLikeBtn} />
          ))}
        </ProductListWrapper>
      );
    };
    
    export default ProductList;