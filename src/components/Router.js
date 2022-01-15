import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import About from "./About";
import NotFound from "./NotFound";
import Details from "./Details";

const Routing = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
