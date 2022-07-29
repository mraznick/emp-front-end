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
      setPicture(onePicture);
      let oneComment = await getComments;
      setComment(oneComment);
      //feel like this isn't how I should be coding in comments
    };

    fetchPicture();
  }, [id]);

  return (
    <div className="detail-parent">
      <div>
        <h1>{picture.Title}</h1>
        <img
          src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`}
        />
        <h2>
          by {picture.Artist} in {picture.Year}
        </h2>
        <p>Tags: {picture.Tags}</p>
        <p>{picture.Comments}</p>
      </div>
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
