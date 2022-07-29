import { useEffect, useState } from "react";
import { getPictures } from "../services/pictures.js";
import Picture from "../components/Picture.jsx";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      const picturesData = await getPictures();
      setPictures(picturesData);
    };

    fetchPictures();
  }, []);

  return (
    <div>
      <h1>Cool Pics</h1>
      {pictures.map((pictureData) => (
        <Picture key={pictureData._id} picture={pictureData} />
      ))}
    </div>
  );
};

export default Pictures;
