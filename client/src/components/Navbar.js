import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
// import "./Navbar.css";
import React, { useState } from "react";
import { Navbar, Form, Container, Button, Nav } from "react-bootstrap";

export default function Navbars() {
  const { isLoggedIn, logout } = useAuth();
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <>
      <Navbar
        bg="light"
        collapseOnSelect
        expand="sm"
        className="navbar row p-3 "
      >
        <Container fluid>
          {/* <Form className="d-flex">
            <Form.Control
              name="searchTitle"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              type="text"
              placeholder="Search Title"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" className="navbar-link" type="submit">
              Search
            </Button>
          </Form> */}
          <h1 className="text-light p-3">MONITOR LIST</h1>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="custom-nav-button"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="justify-content-end">
                <NavLink
                  to="/"
                  className="navbar-link"
                  style={{
                    color: "blue",
                    fontSize: "25px",
                  }}
                >
                  Home
                </NavLink>
              </Nav.Link>
              {isLoggedIn ? (
                <>
                  <Nav.Link>
                    <NavLink
                      to="/watchlist"
                      className="navbar-link"
                      style={{
                        color: "blue",
                        fontSize: "25px",
                      }}
                    >
                      MyWatchlist
                    </NavLink>
                  </Nav.Link>
                  <Button
                    variant="primary"
                    className="navbar-link me-2"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <NavLink
                      to="/login"
                      className="navbar-link"
                      style={{
                        color: "blue",
                        fontSize: "25px",
                      }}
                    >
                      Login
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/signup"
                      className="navbar-link"
                      style={{
                        color: "blue",
                        fontSize: "25px",
                      }}
                    >
                      Signup
                    </NavLink>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
