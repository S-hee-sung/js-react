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
// friend.name = 'Tony'; // 오류
// 실제로 js에서는 값이 바뀌는데 TS에서는 에러를 발생시켜줌
// (TS에러는 에디터& 터미널에서만 발생하고 실제 실행과는 상관없음)
