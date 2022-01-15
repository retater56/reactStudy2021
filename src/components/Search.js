import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Spinner,
  Form,
  ButtonGroup,
  ToggleButton,
  Pagination,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Result from "./Result";
import { startSearch } from "../actions/searchAction";

const Search = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.isFetching);
  const data = useSelector((state) => state.photoRedux);

  const [searchValue, setSearchValue] = useState("");
  const [radioValue, setRadioValue] = useState("10");
  const [page, setPage] = useState(null);

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
        return;
      }
      setPage(1);
    }
  };

  const handlePageClick = (event) => {
    if (event.target.closest(".active")) return;
    setPage(event.target.innerHTML);
  };

  useEffect(() => {
    if (!page) return;
    dispatch(startSearch(searchValue, radioValue, page));
  }, [radioValue, page]);

  return (
    <div className="container">
      <h2>
        This search work with <a href="https://www.flickr.com/" target="_blank">flickr.com</a> API
      </h2>
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
      {isFetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {data.hasOwnProperty("photos") && paginationBasic}
      {data.hasOwnProperty("photos") && <Result />}
    </div>
  );
};

export default Search;
