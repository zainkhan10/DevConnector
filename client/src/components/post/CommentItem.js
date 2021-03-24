import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/actions/creators";

const CommentItem = ({
  comment: { date, avatar, text, user, name, _id },
  postId,
}) => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  const removeComment = (postId, comment_id) => {
    dispatch(deleteComment(postId, comment_id));
  };

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name || 'Unknown Dev'}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD MMM, YYYY">{date}</Moment>
        </p>
        {auth.isAuthenticated && auth.user._id === user && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeComment(postId, _id)}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
