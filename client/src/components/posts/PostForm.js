import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions/creators";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addPost({ text }));
    setText("");
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
          value={text}
          onChange={({ target }) => setText(target.value)}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default PostForm;
