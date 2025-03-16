import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setcommentText] = useState("");
  const { user } = useUser;

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `/api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText,
      },
      {
        headers,
      }
    );
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setcommentText("");
  };
  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      {user && <p>Your are posting as {user.email}</p>}
        <textarea
          value={commentText}
          onChange={(e) => setcommentText(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};
export default AddCommentForm;
