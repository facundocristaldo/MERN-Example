import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../state/actions/postAction";

const Comment = ({ postId, comment }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const { user, name, text, avatar, _id, date } = comment;

  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
      </div>
      {!authState.loging && user === authState.user._id && (
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => dispatch(deleteComment(postId, _id))}
        >
          <i class="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};

export default Comment;
