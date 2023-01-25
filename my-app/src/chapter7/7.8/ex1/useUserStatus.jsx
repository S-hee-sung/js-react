import { useEffect, useState } from "react";

// 사용자의 온라인, 오프라인 상태를 구독하고 그 상태값을 리턴하는 함수
// function useUserStatus(userId) {

//   const [isOline, setIsOline] = useState(null);

//   useEffect(() => {
//     function handleStatusOnline(status) {
//       setIsOline(status,isOline);
//     }

//     ChatAPI.subscribeToUserStatus(userId, handleStatusOnline);
    
//     return () => {
//       ChatAPI.unsubscribeToUserStatus(userId, handleStatusOnline);
//     };  
//   }, []);
  
  
//   return isOline;
// }

// export default useUserStatus;