import { useState } from "react";

function MainForm() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // e.target.value: 해당 타켓(<input>)에 입력된 값
    setValue(e.target.value);
    // 입력 값이 state을 통해 관리되는 이런 방식을 제어 컴포넌트라 부름

    // 만약 사용자가 입력한 모든 알파벳을 대문자로 변경시켜서 관리하고 싶다면..?
    setValue(e.target.value.toUpperCase());

  };

  const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    e.preventDefault(); // 해당 event의 기본 동작을 막음
    // 여기서는 submit 이벤트의 기본 동작은 새로 고침
  };


  return (  
    // 여기서는 기존 HTML 방식과 차이를 보이기 위해 form 태그를 그대로 사용
    // <button type="button" onClick={handleSubmit}> 제출</button> 이렇게 쓰는게 일반적

    <form onSubmit={handleSubmit}>
      <label>
        이름 : 
        {/* state에 값을 가져다 넣어줌으로 항상 state에 들어있는 값이 input에 표시됨 */}
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  
  );
}

export default MainForm;