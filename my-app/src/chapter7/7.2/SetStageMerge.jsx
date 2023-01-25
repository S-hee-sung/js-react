import { useState } from "react";

function SetStateMerge(props) {
  const [result, setResult] = useState(2);

  const handleAdd = () => {
    console.log('handleAdd Start');
    setResult(result + 5);
    console.log('handleAdd end');
  };
  const handleSub = () => {
    console.log('handleSub Start');
    setResult(result - 3);
    console.log('handleSub end');
  };
  const handleMul = () => {
    console.log('handleMul Start');
    setResult(result * 2);
    console.log('handleMul end');
  };
  const handleDiv = () => {
    console.log('handleDiv Start');
    setResult(result / 2);
    console.log('handleDiv end');
  };
  const handleMixCalc = () => {
    handleAdd();
    handleMul();
  };

  return (
    <div>
      <p>계산 결과: {result}</p>
      <button onClick={handleAdd}>+ 5</button>
      <button onClick={handleSub}>- 3</button>
      <button onClick={handleMul}>* 2</button>
      <button onClick={handleDiv}>/ 2</button>
      <button onClick={handleMixCalc}>MixCalc</button>
    </div>
  );
};

export default SetStateMerge;