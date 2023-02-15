
import axios from "axios";

// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용 할 수 있도록 함수로 만듦


export const getProducts = async() => {
  try {
    const response = await axios.get('http://localhost:4000/products')
    if (response.status === 200) {  // 요청시 200 ok 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

export const getProductsById = async(id) => {
  try {
    const response = await axios.get(`http://localhost:4000/products/${id}`)
    if (response.status === 200) {  // 요청시 200 ok 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

export const addProduct = async(product) => {
  try {
    const response = await axios.post(`http://localhost:4000/product-add`,{ product })
    if (response.status === 200) {  // 요청시 200 ok 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// request.body.product

export const orderProduct = async({ productId, orderCount }) => {
  try {
    const response = await axios.post(`http://localhost:4000/product-order`,{ productId, orderCount })
    if (response.status === 200) {  // 요청시 200 ok 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// request.body.productId
// request.body.productCount