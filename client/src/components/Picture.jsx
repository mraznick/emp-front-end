import { Link } from "react-router-dom";


const Picture = ({picture}) => {

  return (
    <div>
      <Link to={`/pictures/${picture._id}`}>
        <img src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`} />
        </Link>
      <h2>{picture.Title} by {picture.Artist}</h2>
      

       
    </div>
  );
};

export default Picture;