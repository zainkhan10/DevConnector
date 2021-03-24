import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../store/actions/creators";

const PostItem = ({
  post: { avatar, name, text, date, likes, comments, user, _id },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  const likePost = (id) => dispatch(addLike(id));
  const unlikePost = (id) => dispatch(removeLike(id));

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD MMM, YYYY">{date}</Moment>
        </p>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => likePost(_id)}
        >
          <i className="fas fa-thumbs-up"></i>{" "}
          {likes.length > 0 && <span>{likes.length}</span>}
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => unlikePost(_id)}
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {auth.isAuthenticated && auth.user._id === user && (
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostItem;
