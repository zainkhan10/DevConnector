import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostbyId } from "../../store/actions/creators";
import Spinner from "../layout/Spinner";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const { loading, post } = useSelector(({ post }) => post);

  useEffect(() => {
    dispatch(getPostbyId(id));
  }, [id]);

  return loading || !post ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <div className="post bg-white p-1 my-1">
        <div>
          <a href="profile.html">
            <img className="round-img" src={post.avatar} alt="" />
            <h4>{post.name}</h4>
          </a>
        </div>
        <div>
          <p className="my-1">{post.text}</p>
        </div>
      </div>

      <CommentForm postId={post._id} />

      <div className="comments">
        {post.comments.length > 0 &&
          post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default Post;
