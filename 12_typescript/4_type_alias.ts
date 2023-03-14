// type alias (별칭) 만드는 법
let animalVar: string | number | undefined;
// 타입이 길어지거나 타입을 재사용하고 싶다면 변수처럼 만들어 사용 가능

// 영어 대문자로 시작하는게 관례, 가독성을 위해 뒤에 Type을 붙여주기도 함
// type 선언도 변수와 같이 중복 선언 불가
type AnimalType = string | number | undefined;
let animal: AnimalType ='Dog';

// 객체 타입을 type alias로 만들어보기

type PersonType = {
  name: string,
  age: number
}

let person4: PersonType = {
  name: 'Kim',
  age: 25,
}

// 옵셔널 속성
type PersonType2 = {
  name: string,
  age?: number // age는 선택사항
}

let person5: PersonType2 = {
  name: 'Alice',
}

// TS를 쓰면 객체 자료 수정도 막을 수 있음
// 속성에 사용 가능한 readonly
type Friend = {
  readonly name: string
}
let friend: Friend = {
  name: 'Peter'
};
// friend.name = 'Tony'; // 오류
// 실제로 js에서는 값이 바뀌는데 TS에서는 에러를 발생시켜줌
// (TS에러는 에디터& 터미널에서만 발생하고 실제 실행과는 상관없음)

// union type을 이용하여
// | 연산자로 두 개의 type alias 묶기
type Name = string;
type Age = number;
type PersonTypes = Name | Age;

// intersection type을 이용하여
// & 연산자로 객체 타입 결합하기
type PositionX = { x : number };
type PositionY = { y : number };
type Position2D = PositionX & PositionY;

let position: Position2D = { x: 10, y: 20};

// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동 완성 기능이 동작함

// 특정 문자만 들어올 수 있도록 지정
let hisName: 'Kim' | 'goni';
hisName = 'goni'; // 자동 완성 기능 동작
// hisName = 'kk';  // 에러

// 함수에서 Literal Type 사용하기
function testFunc(params: 'hello'): 1 | 0 {
  return 1;
}
testFunc('hello');

// QUIZ
// 아래 조건을 만족하는 함수 만들기
// 1. 가위/바위/보 중 1개를 입력할 수 있고 (예: func('가위');)
// 2. 가위/바위/보 만 담을수 있는 배열을 리턴하는 함수 (return ['가위', '보'];)

function func(params: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위','보'];
}