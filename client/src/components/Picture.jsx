import { Link } from "react-router-dom";


const Picture = ({picture}) => {

  return (
    <div>
        <h1>{picture.Title}</h1>
      <Link to={`/pictures/${picture._id}`}>
        <img src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`} />
        </Link>
        <h2>by {picture.Artist} in {picture.year}</h2>
        <h3>Tags: {picture.Tags}</h3>
        <p>{picture.Comments}</p>
       
    </div>
  );
};

export default Picture;