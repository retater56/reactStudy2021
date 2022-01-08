import React from "react";

const Result = (props) => {
  const notFound = (
    <div className="notFound">
      <h2>404</h2>
      <h3>Not found</h3>
      <h4>Please, try again...</h4>
    </div>
  );

  let picsArrray = props.data.photos.photo.map((photo) => {
    let photoSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

    return <img alt={photo.title} src={photoSrc} key={photo.id}></img>;
  });

  return (
    <div className="result">
      {picsArrray}
      {!props.data.photos.photo.length && notFound}
    </div>
  );
};

export default Result;
