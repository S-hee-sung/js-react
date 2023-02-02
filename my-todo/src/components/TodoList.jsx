import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

// todos 배열을 props로 받아와서 map() 함수를 사용해 여러개의 TodoListItem 컴포넌트로 변환해 보여줌
function TodoList({ todos, onRemove, onToggle }) { // 구조 분해 할당: 어떤 형식으로 쓰든 개발자 취향
  return (  
    <TodoListWrapper>
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} 
      onToggle={onToggle}/>
      )}
    </TodoListWrapper>
  );
}

export default TodoList;