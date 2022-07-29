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
    <div>
      <h1>This is the screen for an individual picture</h1>
      <div>Image goes here</div>
      <div>{picture}</div>
      <button>
        <Link to={`/comments`}>Add Comment</Link>
      </button>

    </div>
)

};
