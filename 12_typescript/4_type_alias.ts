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