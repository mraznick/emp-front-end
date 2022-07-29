import { useState, useEffect } from "react";
import { getComments, createComment } from "../services/comments.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPicture } from "../services/pictures";

export const PictureDetail = () => {
  const [picture, setPicture] = useState({});
  const [comment, setComment] = useState([]);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPicture = async () => {
      let onePicture = await getPicture(id);
      let oneComment = await getComments;
      setPicture(onePicture);
      setComment(oneComment);
      //feel like this isn't how I should be coding in comments
    };

    fetchPicture();
  }, [id]);

  return (
    <div>

      <h1>This is the screen for an individual picture</h1>
      <div>Image goes here</div>

      <div>{picture}</div>

      <div>
      <button>
        <Link to={`/comments`}>View Comments</Link>
      </button>
      
        <button
          onClick={() => {
            createComment(comment._id);
            navigate("/comments", { replace: true });
          }}
        >
          Add Comment
      </button>
      </div>
    </div>
  );
};
