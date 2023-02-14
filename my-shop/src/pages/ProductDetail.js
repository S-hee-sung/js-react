import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, selectSelectedProduct } from "../features/product/productSlice";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import styled, { keyframes } from "styled-components";
import { ToastContainer, toast } from "react-toastify";

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; } // 0%
  50% {background-color: #e8f7fa; }
  to { background-color: #cff4fc; } // 100%
`; 

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail(props) {
  // useParams() 사용하여 productId 가져오기
  const { productId  } = useParams();
  const dispatch = useDispatch();
  
  // 전역 스토어에서 selectedProduct 꺼내오기
  // const product = useSelector((state) => state.product.selectedProduct);
  const product = useSelector(selectSelectedProduct);
  console.log(product);

  // Info창 상태
  const [showInfo, setShowInfo] = useState(true);

  const [orderCount, setOrderCount] = useState(1); // 주문수량 판매
  
  const handleChangeOrderCount = (e) => {
    if (isNaN(e.target.value)) {
      toast.error('숫자만 입력하세요');
      return;
    }
    setOrderCount(Number(e.target.value));
  };
  



  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ...api call...
    const foundProduct = data.find((product) => {
      return product.id === productId;
    })

    dispatch( getProductById(foundProduct) );

    // 3초 뒤에 info창 사라지게 만들기
    const timmout = setTimeout(() => {
      setShowInfo(false);
    },3000);
    // 불필요하게 타이머가 계속 생기는 것을 정리
    return () => {
      clearTimeout();
    };
  }, []);
  
  // product가 없을 경우에
  if (!product) {
    // return null;
    return <div>상품이 존재하지 않습니다.</div>;
  }
  
  return (  
    <Container className="pt-3">
      {/* 처음에 info 뛰우고 3초 뒤에 사라지게 만들기
      처음 렌더링 됐을때 setTimeout으로 타이머 설정 */}
      {showInfo &&
        <StyledAlert variant="info" onClose={() => setShowInfo(false)} dismissible>
          현재 100명이 이 상품을 보고 있습니다.
        </StyledAlert>
      }

      
      <Row>
        {/* 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>

          <Col md={4} className= "m-auto mb-3" >
            <Form.Control type="text" value={orderCount} 
              onChange={handleChangeOrderCount}
            />
          </Col>

          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;