// 하위 엘리먼트를 감싸서 카드 형태로 보여주는 컴포넌트
function Card(props) {
  const { tittle, backgroundColor, children } = props


  return (  
    <div 
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px gray",
        backgroundColor: backgroundColor || "lightgray" // short-circuit
        // backgroundColor에 falsy 값이 들어오면 기본값으로 "lightgray"를 사용
      }}
    >
      {tittle &&
        <h1 style={{ borderBottom: "1px solid gray" }}>{tittle}</h1>
      }
      {children}
    </div>
  );
}

export default Card;