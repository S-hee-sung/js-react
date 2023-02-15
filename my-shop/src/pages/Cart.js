import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectCartList, increaseCount, decreaseCount } from "../features/cart/cartSlice";


function Cart(props) {
const dispatch = useDispatch();
const cartList = useSelector(selectCartList);

  return (  
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199000원</td>
          </tr> */}

          {/* 
            1. 전역 스토어에서 cartList를 꺼내오기 
            2. cartList 반복 렌더링 + 데이터 바인딩
          */}

          {cartList.map((cart, index) => 
            <tr key={cart.id} cart={cart}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <button type="button" onClick={() => { dispatch(decreaseCount(cart.id)); }}>-</button>
                {cart.count}
                <button type="button" onClick={() => { dispatch(increaseCount(cart.id)); }}>+</button>
              </td>
              <td>{cart.price * cart.count}원</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;