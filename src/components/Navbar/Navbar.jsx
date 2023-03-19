import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: false,
      inputSearch: "",
    };
  }

  setFieldValue = (event) => {
    const input = { ...this.state };
    input[event.target.id] = event.target.value;
    this.setState({ inputSearch: input.inputSearch });
  };

  search = (event) => {
    event.preventDefault();
    this.props.setInputSearch(this.state.inputSearch);
    this.props.history.push("/movies");
  };

  logout = () => {
    localStorage.setItem("isLogged", false);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/movies">
            <span className="title">Movie-search</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() =>
              this.setState({ menuToggle: !this.state.menuToggle })
            }
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={"collapse navbar-collapse ".concat(
              this.state.menuToggle ? "show" : ""
            )}
            id="navbarScroll"
          >
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ bsScrollHeight: "100px" }}
            >
              {localStorage.getItem("isLogged") === "true" ? (
                <li className="nav-item">
                  <Link to="/movies/add">
                    <span className="nav-link active" aria-current="page">
                      Add Movie
                    </span>
                  </Link>
                </li>
              ) : null}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                id="inputSearch"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.inputSearch}
                onChange={this.setFieldValue}
              />
              <button
                className="btn btn-sm btn-outline-warning me-2"
                type="submit"
                onClick={this.search}
              >
                Search
              </button>
              {localStorage.getItem("isLogged") !== "true" ? (
                <Link to="/login">
                  <button className="btn btn-outline-warning" type="button">
                    Login
                  </button>
                </Link>
              ) : (
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  type="button"
                  onClick={this.logout}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
