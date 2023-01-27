const students = [
  {
    name: '홍길동',
    id: 'a1'
  },
  {
    name: '유재석',
    id: 'a2'
  },
  {
    name: '이미주',
    id: 'a3'
  },
  {
    name: '이이경',
    id: 'a4'
  }
];

// Quiz: 배열의 각 요소를 렌더링하고 배열 렌더링 시 key 값 추가해보기
// key값은 id속성을 추가
// 출석부에 이름 출력하기 
function AttendanceBook() {
  
  return (  
    <ul>
      {students.map((student,index) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;