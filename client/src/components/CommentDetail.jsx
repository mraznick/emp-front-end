import { useState, useEffect } from "react";
import { getComments, createComment } from "../services/comments.js";


export default function CommentDetail({picture, pictureId, userId, setToggle}) {
  const [comment, setComment] = useState({ Owner: userId, Text: "" })

  const handleChange = (e) => {
    let { name, value } = e.target;

    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment(pictureId, comment);
    setComment((prev) => ({
      ...prev,
      Text: "",
    }));
    setToggle(prev => !prev)
  };
 
  return (
    <div className="comment-detail-parent">
      <div>
        {/* <img
          src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`}
        /> */}
        <h2 className="artist-name">
          Share your thoughts on {picture.Title} by {picture.Artist}
        </h2>
        {picture.Comments.length > 0 ? picture.Comments.map((comment) => (  
         <p>{comment.Text}</p>
        )) : null}
      </div>
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add your thoughts here"
            name="Text"
            value={comment.Text}
            onChange={handleChange}
          />
        <button className="submit" type="submit">Post Your Comment</button>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
};