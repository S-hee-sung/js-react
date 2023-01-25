import { useEffect } from "react";
import { useState } from "react";
import useUserStatus from "./useUserStatus";

// function UserStatusEx(props) {
  // const [isOline, setIsOline] = useState(null);

  // useEffect(() => {
  //   function handleStatusOnline(status) {
  //     setIsOline(status,isOline);
  //   }

  //   ChatAPI.subscribeToUserStatus(props.user.id, handleStatusOnline);
    
  //   return () => {
  //     ChatAPI.unsubscribeToUserStatus(props.user.id, handleStatusOnline);
  //   };  
  // }, []);

//   const isOline = useUserStatus(props.user.id);

//   if (isOline === null) {
//     return 'Loading..';
//   }
//   return isOline ? 'online' : 'Offline' ;


// }

// export default UserStatusEx;