import { Link } from "react-router-dom";


const Picture = ({picture}) => {

  return (
    <div className="picture-comp-parent">
      <Link to={`/pictures/${picture._id}`}>
        <img src={`https://www.artic.edu/iiif/2/${picture.ImageId}/full/843,/0/default.jpg`} />
        </Link>
      <h2 className="comp-artwork-title">{picture.Title} </h2>
      <h3 className="comp-artist-name">by {picture.Artist}</h3>
      

       
    </div>
  );
};

export default Picture;