// type alias (별칭) 만드는 법
let animalVar;
let animal = 'Dog';
let person4 = {
    name: 'Kim',
    age: 25,
};
let person5 = {
    name: 'Alice',
};
let friend = {
    name: 'Peter'
};
let position = { x: 10, y: 20 };
// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동 완성 기능이 동작함
// 특정 문자만 들어올 수 있도록 지정
let hisName;
hisName = 'goni'; // 자동 완성 기능 동작
// hisName = 'kk';  // 에러
// 함수에서 Literal Type 사용하기
function testFunc(params) {
    return 1;
}
testFunc('hello');
// QUIZ
// 아래 조건을 만족하는 함수 만들기
// 1. 가위/바위/보 중 1개를 입력할 수 있고 (예: func('가위');)
// 2. 가위/바위/보 만 담을수 있는 배열을 리턴하는 함수 (return ['가위', '보'];)
function func(params) {
    return ['가위', '보'];
}
