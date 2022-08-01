import { useState, useEffect } from "react";
import { getComments, createComment } from "../services/comments.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPicture } from "../services/pictures";
import CommentDetail from "../components/CommentDetail.jsx";

export const PictureDetail = ({ userId }) => {
  const [picture, setPicture] = useState(null);
  const [toggle, setToggle] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPicture = async () => {
      let onePicture = await getPicture(id);
      setPicture(onePicture);
    };

    fetchPicture();
  }, [id, toggle]);

  if(!picture) return <h1>Loading...</h1>

  return (
    <div className="picture-detail-parent">
      <div>
        <h1 className="artwork-title">{picture.Title}</h1>
        <img
          src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`}
        />
        <h2 className="artist-name">
          by {picture.Artist} in {picture.Year}
        </h2>
        <ul>
          Tags:
          {picture.Tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>

      </div>
      <div>
          <CommentDetail picture={picture} pictureId={id} userId={userId} setToggle={setToggle} />
      </div>
    </div>
  );
};
