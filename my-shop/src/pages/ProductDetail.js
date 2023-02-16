import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, selectSelectedProduct } from "../features/product/productSlice";
import { addItemToCart } from "../features/cart/cartSlice";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import styled, { keyframes } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import TabContents from "../components/TabContents";
import LatestView from "../components/LatestView";

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
  const [showTabIndex, setShowTabIndex] = useState(0); // 탭 index 상태
  const [showModal, setShowModal] = useState(false); // 모달 상태

  const handleClose = () => setShowModal(false);
  const handleOpen  = () => setShowModal(true);
  const navigate = useNavigate();

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

    // 상세 페이지에 들어오면 해당 상품의 id를 localStorage에 추가
    let latestViewed = JSON.parse(localStorage.getItem('latestViewed')) || [];
    // id를 넣기 전에 기존 배열에 존재하는 검사하거나
    // 또는 일단 넣고 Set 자료형을 이용하여 중복 제거
    latestViewed.push(productId);
    latestViewed = new Set(latestViewed);
    // latestViewed = Array.from(latestViewed);
    latestViewed = [...latestViewed];

    localStorage.setItem('latestViewed', JSON.stringify(latestViewed));


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
          <Button variant="warning"
            onClick={() => {
              dispatch(addItemToCart({ 
                id: product.id,
                title: product.title, 
                price:product.price, 
                count: orderCount,
              }));

              handleOpen(); // 장바구니 모달 열기
            }}
          >장바구니</Button>

        </Col>
      </Row>

      {/* 탭 UI */}
      {/* defaultActiveKey: 기본으로 active할 탭, active 클래스가 들어가 있음 */}
      <Nav variant="tabs" defaultActiveKey="/home" className="my-3">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { setShowTabIndex(0); }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setShowTabIndex(1); }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { setShowTabIndex(2); }}>Q&amp;A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => { setShowTabIndex(3); }}>반품/교환정보</Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* 탭의 내용을 다 만들어놓고 조건부 렌더링하면 됨 */}
      {/* 방법 1 */}
      {showTabIndex === 0
        ? <div>탭 내용1</div>
        : showTabIndex === 1
          ? <div>탭 내용2</div>
          : showTabIndex === 2
            ? <div>탭 내용3</div>
            : showTabIndex === 3
              ? <div>탭 내용4</div>
              : null
      }

      {/* 방법2. 컴포넌트 추출 */}
      <TabContents showTabIndex={showTabIndex} />

      {/* 방법3. 배열이나 객체 형태로 만들어서 조건부 렌더링 */}
      {/* 배열 형태 */}
      {
        [
          <div>탭 내용1</div>,
          <div>탭 내용2</div>,
          <div>탭 내용3</div>,
          <div>탭 내용4</div>,
        ][showTabIndex]
      }
      {/* 객체 형태 */}
      {
        {
          'detail': <div>탭 내용1</div>,
          'detail': <div>탭 내용2</div>,
          'detail': <div>탭 내용3</div>,
          'detail': <div>탭 내용4</div>,
        }['detail']
      }

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>☏ 고니네 샵 알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          장바구니 상품을 담았습니다.<br />
          장바구니로 이동하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={() => {navigate('/cart'); }}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>

      <LatestView />
    </Container>
  );
}

export default ProductDetail;