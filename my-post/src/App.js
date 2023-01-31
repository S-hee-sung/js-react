import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import PostDetail from './components/PostDetail';






function App() {  
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법' ,'스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className='header--dark'>
        <h4>Goni Post</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>  
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Goni, kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 21일</p>
          <p>by alice</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 22일</p>
          <p>by hero</p>
        </div> */}

        {posts.map((post,index) => {
          return (
            <div key={index} className='list' 
              onClick={() => {
                setShowPostDetail(true);
                setCurrentIndex(index);
              }}
            >
              <h4>{post}</h4>
              <p>2023년 1월 20일</p>
              <p>by Goni, kim</p>
            
              <hr />
              
              <div className='toolbar'>
                {/* 좋아요 버튼 */}
                <span onClick={(e) => {
                  // (버그 수정) 현재는 좋아요 버튼 누를때 포스트 상세보기까지 같이 클릭됨!!
                  // 부모,자식 관계에 있을 때 이벤트 버블링이 일어남
                  e.stopPropagation(); // 상위 요소로 전파되는 이벤트 버블링을 막고 싶을 때            

                  const copyLikeCount = [...likeCount];
                  // copyLikeCount[0] = copyLikeCount[0] + 1;
                  // copyLikeCount[0] ++;
                  copyLikeCount[index] ++;
                  setLikeCount(copyLikeCount);
                }}
                >💗 {likeCount[index]}</span>

                {/* Quiz: 포스트마다 삭제 버튼 & 기능 만들기  */}
                <span style={{ fontSize: 19 }}
                  onClick= {(e) => {
                    e.stopPropagation();

                    // const copyDeletePosts = [...posts];
                    // copyDeletePosts.splice(index,1);
                    // setPosts(copyDeletePosts);

                    // 또는 배열의 filter() 함수 사용
                    const filterdPosts = posts.filter((value, idx) => {
                      return index !== idx;
                    });
                    setPosts(filterdPosts);

                    const copyLikeCount = [...likeCount];
                    copyLikeCount.splice(index,1);
                    setLikeCount(copyLikeCount);
                  }}
                >♣</span>

              </div>
            </div>
            
          );
        })}
        
        {/* 새로운 포스트 등록 */}
        {/* QUIZ: input에 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가 */}
        <input type="text" value={inputValue} onChange={(e) => {
          setInputValue(e.target.value);
        }} />
        <button type='button' onClick={(e) => {
          // posts state에 요소 하나 추가하면 자동으로 랜더링 됨
          const copyPosts = [...posts];
          copyPosts.unshift(inputValue);
          setPosts(copyPosts);
          setInputValue('');

          // 포스트 하나 추가 시 좋아요 카운트도 같이 추가
          const copyLikeCount = [...likeCount];
          copyLikeCount.unshift(0);
          setLikeCount(copyLikeCount);

        }}>
          포스트 등록
        </button>




        {/* 포스트 상세보기 조건부 렌더링 */}
        {/* {showPostDetail && <PostDetail />} */}
        {showPostDetail && <PostDetail posts={posts} setPosts={setPosts}
        currentIndex={currentIndex} />}
      </div>
    </>
  );
}

export default App;


// 연습
// 1. PostListItem 컴포넌트 추출

// 2. input에 아무것도 입력 안하고 등록 버튼 누르면
// 1) 유효성 검사해서 등록 x 
// 2) 미입력시 비활성화 -> 입력이 생기면 버튼 활성화

// 3. 날짜 및 작성자, 좋아요 수 등 데이터를 문자열이 아닌 객체 형태로 처리해보기

// 4. 포스트 수정할 때 input으로 입력받은 내용으로 수정해보기

// 5. 글 등록시 제목, 날짜, 작성자, 상세 내용을 입력받아 등록하기
