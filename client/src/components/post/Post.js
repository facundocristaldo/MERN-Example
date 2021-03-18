import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getPost } from "../../state/actions/postAction";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { postId } = params;
  const postState = useSelector((state) => state.post);
  const { loading, post } = postState;
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  return loading || !post ? (
    <Spinner />
  ) : (
    <>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem showActions={false} post={post} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments &&
          post.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={post._id} />
          ))}
      </div>
    </>
  );
};

export default Post;
