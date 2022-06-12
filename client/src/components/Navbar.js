import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
// import "./Navbar.css";
import React, { useState } from 'react';
import { Navbar, Form, Container, Button, Nav } from "react-bootstrap"

export default function Navbars() {
  const { isLoggedIn, logout } = useAuth();
  const [searchTitle, setSearchTitle] = useState("");

  return (

    <Navbar bg="secondary" expand="lg" className="navbar">
      <Container fluid>
      <Form className="d-flex">
      <Form.Control
              name="searchTitle"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              type="text"
              placeholder="Search Title"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" className="navbar-link" type="submit">Search</Button>
      </Form>
      <h1>WTOMIWTWPIOTL</h1>
      <Nav className="justify-content-end" >
      <NavLink to="/" className="navbar-link" 
      style={{
        color: "blue",
        fontSize:"25px"
    }} 
      >
        Home
      </NavLink>
      </Nav>
      {isLoggedIn ? (
        <>
          <NavLink to="/protected" className="navbar-link"   
            style={{
              color: "blue",
              fontSize:"25px"
            }} 
          >
            MyWatchlist
          </NavLink>
          <Button variant="primary" className="navbar-link"  size="lg" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <NavLink to="/login" className="navbar-link"
            style={{
              color: "blue",
              fontSize:"25px"
            }}           
          >
            Login
          </NavLink>
          <NavLink to="/signup" className="navbar-link"
            style={{
              color: "blue",
              fontSize:"25px"
            }}           
          >
            Signup
          </NavLink>
        </>
      )}
      </Container>
    </Navbar>
  );
}
