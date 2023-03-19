import React, { Component } from "react";
import PropsType from "prop-types";
import { Link, withRouter } from "react-router-dom";
import "./MovieCards.css";

class MovieCards extends Component {
  createMovieCards(movie, index) {
    return (
      <div
        className="card col-12 col-sm-5 col-md-3 col-lg-2 m-2"
        key={movie.imdbID + "-" + index}
      >
        <img
          src={movie.Poster}
          className="card-img-top mt-2"
          alt={movie.Title}
        />
        <div className="card-body d-flex flex-column justify-content-around">
          <div className="mb-3">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>
          </div>
          <Link to={"/movies/detail/" + movie.imdbID}>
            <button className="btn btn-warning">Dettaglio</button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const moviesWithPoster = this.props.movies.filter(
      (movie) => movie.Poster !== "N/A"
    );
    const listMovies = moviesWithPoster.map((movie, index) =>
      this.createMovieCards(movie, index)
    );
    return <React.Fragment> {listMovies} </React.Fragment>;
  }
}

MovieCards.propsType = {
  movies: PropsType.array.isRequired,
  routeChange: PropsType.func.isRequired,
};

export default withRouter(MovieCards);

{
  /* 
      <div classNameName="movie__card" >
        <img classNameName="movie__image" src={movie.Poster} alt="postal" />
        <div classNameName="flex__card">
          <p classNameName="heading">{movie.Title}</p>
          <p classNameName="paragraph">{movie.Year}</p>
          <br />
          <Link to={"/moviedetail/" + movie.imdbID}>
            <button>Dettaglio</button>
          </Link>
        </div>
      </div> */
}
