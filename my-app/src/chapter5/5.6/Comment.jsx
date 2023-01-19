import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function Comment(props) {
  return (
    // 원본
    // <div className="comment">
    //   <div className="user-info">
    //     <img className="avatar"
    //       src={props.author.avatarUrl}
    //       alt={props.author.name}
    //     />
    //     <div className="user-info-name">
    //       {props.author.name}
    //     </div>
    //   </div>
    //   <div className="comment-text">
    //     {props.text}
    //   </div>
    //   <div className="comment-date">
    //     {props.date}
    //   </div>
    // </div>

    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  );
}

export default Comment;