import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { 
  getAllProducts, 
  getMoreProducts,
  getMoreProductsAsync, 
  selectProductList,
  selectStatus
} from "../features/product/productSlice";

// 리액트(js)에서 이미지 파일 import 하는법
import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useEffect } from "react";
import ProductListItem from "../components/ProductListItem";
import { getProducts } from "../api/productAPI";
import LatestView from "../components/LatestView";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  // API 요청 상태 가져오기(로딩 상태)
  // 로딩 만들기 추천: react-spinners, LottieFiles
  const status = useSelector(selectStatus);

  console.log(productList);

  // 처음 마운트 됐을때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덱스 스토어에 저장

  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ...api call ...
    dispatch(getAllProducts(data));
  }, []);

  const handleGetMoreProducts = async() => {
    const result = await getProducts();
    if (!result) return;   
  
    dispatch(getMoreProducts(result));
  };
  

  return (  
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            {/* 1. productListItem 컴포넌트화 시키기 */}
            {/* 2. productList 배열을 반복하여 productListItem 렌더링 */}
            {/* 3. 상품 정보를 props로 넘겨서 데이터 바인딩 */}
            {productList.map((product) => 
              <ProductListItem 
                // title={product.title} 
                // imagePath={product.imagePath} 
                // price={product.price} 
                key={product.id}
                product={product} 
              />
            )}
          </Row>
        </Container>

        {/* 상품 더보기 */}
        <Button variant="secondary" className="mb-4"
          onClick={() => {
            axios.get('http://localhost:4000/products')
              .then((response) => {
                console.log(response.data);
                // 스토어에 dispatch로 요청 보내기
                dispatch(getMoreProducts(response.data));
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          더보기
        </Button>

        {/* 위 HTTP 요청 코드를 함수로 만들어서 API 폴터로 추출하고
        async/await로 바꾸기 */}
        <Button variant="secondary" className="mb-4" onClick={handleGetMoreProducts}>
          더보기2
        </Button>

        {/* thunk를 이용한 비동기 작업 처리하기 */}
        <Button variant="secondary" className="mb-4" 
          onClick={() => dispatch(getMoreProductsAsync()) }>
          더보기3  {status}
        </Button>

      </section>

      <LatestView />
    </>
  );
}

export default Main;

// json-server
// 실무와 비슷한 느낌으로 하기 위해 가짜 API 서버를 만듦
// json 파일 하나만 있으면 연습용 서버를 쉽게 구성 가능
// npx json-server ./src/data2.json --port 4000


// -resource-
// http://localhost:4000/products   http://localhost:4000/user