import { Link } from "react-router-dom";

const Picture = ({ picture }) => {

  return (
    <div>
      <Link to={`/pictures/${pictures._id}`}>
        <h1>Image goes here?</h1>
        <h1>{picture.Title}</h1>
        <h2>by {picture.Artist} in {picture.year}</h2>
        <h3>Tags: {picture.Tags}</h3>
        <p>{picture.Comments}</p>
      </Link>
    </div>
  )
}