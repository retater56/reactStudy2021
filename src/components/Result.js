import React from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const Result = (props) => {
  let picsArrray = props.data.photos.photo.map((photo) => {
    let photoSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    let photoPath = `${photo.title}-${photo.farm}-${photo.server}-${photo.id}-${photo.secret}`

    return (
      <Link to={`/details/${photoPath}`} key={photo.id}>
        <img alt={photo.title} src={photoSrc}></img>
      </Link>
    );
  });

  return (
    <div className="result">
      {picsArrray}
      {!props.data.photos.photo.length && <NotFound />}
    </div>
  );
};

export default Result;
