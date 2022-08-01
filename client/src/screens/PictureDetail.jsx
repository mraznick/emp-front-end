import { useState, useEffect } from "react";
import { getComments, createComment } from "../services/comments.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPicture } from "../services/pictures";

export const PictureDetail = () => {
  const [picture, setPicture] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPicture = async () => {
      let onePicture = await getPicture(id);
      setPicture(onePicture);
    };

    fetchPicture();
  }, [id]);

  return (
    <div className="detail-parent">
      <div>
        <h1 className="artwork-title">{picture.Title}</h1>
        <img
          src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`}
        />
        <h2 className="artist-name">
          by {picture.Artist} in {picture.Year}
        </h2>
        <ul>Tags:
          <li>{picture.Tags}</li>
        </ul>
        <p>{picture.Comments}</p>
      </div>
      <div>

        <button
          onClick={() => {
            createComment(Comment._id);
            navigate("/comments");
          }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};
