import React, { useState, useEffect } from "react";
import {
  Spinner,
  Form,
  ButtonGroup,
  ToggleButton,
  Pagination,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Result from "./Result";

const Search = () => {
  const [state, setState] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [radioValue, setRadioValue] = useState("10");
  const [page, setPage] = useState(null);
  const [error, setEror] = useState(null);

  const radios = [
    { name: "10", value: "10" },
    { name: "30", value: "30" },
    { name: "50", value: "50" },
  ];

  let pages = [];
  for (let number = 1; number <= 10; number++) {
    pages.push(
      <Pagination.Item key={number} active={number == page}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <Pagination size="lg" onClick={(e) => handlePageClick(e)}>
      {pages}
    </Pagination>
  );

  const handleSearch = (event) => {
    if (event.code == "Enter") {
      if (!searchValue) {
        alert("Please, write text!");
        setState(null);
        setIsPending(false);
        return;
      }

      setIsPending(true);
      setPage(1);
    }
  };

  const handlePageClick = (event) => {
    if (event.target.closest(".active")) return;
    setPage(event.target.innerHTML);
  };

  useEffect(() => {
    if (!page) return;
    fetchingData();
  }, [radioValue, page]);

  const fetchingData = () => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=97b84eae92cb8df4d0ea1c834e4fcec0&tags=${searchValue}&per_page=${radioValue}&page=${page}&format=json&nojsoncallback=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        setState(data);
        setIsPending(false);
      })
      .catch((err) => {
        setEror(err.message);
      });
  };

  return (
    <div className="container">
      <h2>This search work with <a href="https://www.flickr.com/" target="_blank"> flickr.com</a> API</h2>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Search what you want to see..."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {isPending && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {state && paginationBasic}
      {state && <Result data={state} />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Search;
