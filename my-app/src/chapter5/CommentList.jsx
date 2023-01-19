import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name: '홍길동',
    comment: '첫 댓글입니다.',
  },
  {
    name: '유재석',
    comment: '리액트 재밌다!',
  },
  {
    name: '박명수',
    comment: '재수 없..!',
  },
  {
    name: '이미주',
    comment: '리액트 어려워 ㅠ',
  },
];

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return(
    <div>
      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용
      (map()은 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
      앞으로 리액트에서 동적인 배열을 렌더링해야 할 때는 map() 함수를 사용하여
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨 */}
      {comments.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} comment={comment.comment} />
        );
      })}

      {/* map() 함수 결과 */}
      {/* {[
        <Comment name={'이미주'} comment={'리액트 어려워 ㅠ'} />,
        <Comment name={'박명수'} comment={'재수 없..!'} />,
        <Comment name={'유재석'} comment={'리액트 재밌다! ㅠ'} />
      ]} */}


      {/* <Comment name={"홍길동"} comment={"첫 댓글입니다"} />
      <Comment name={"유재석"} comment={"리액트 재밌다!"} />
      <Comment name={"박명수"} comment={"재수 없..!"} /> */}
    </div>
  );  
}

export default CommentList;