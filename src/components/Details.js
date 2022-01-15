import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  const [title, farm, server, id, secret] = params.id.split("-");

  useEffect(() => {
    fetchingData();
  });

  const fetchingData = () => {
    fetch(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from that resource");
        }
        setState(
          `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Container>
      <h2>{title}</h2>
      <h3>
        Original link:{" "}
        <a href={state} target="_blank">
          {state}
        </a>
      </h3>
      <Button variant="primary" size="lg" onClick={() => history.back()}>
        Back to search
      </Button>
      <img alt={`${title}`} src={state}></img>
    </Container>
  );
};

export default Details;
