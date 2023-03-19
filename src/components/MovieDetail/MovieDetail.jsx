import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./movieDetail.css";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Released: "26 Apr 2019",
        imdbRating: "8.4",
        Genre: "Action, Adventure, Drama",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      },
    };
  }

  componentDidMount() {}

  async searchMoviesById() {}

  render() {
    return (
      <div
        className="container-fluid d-flex justify-content-center bg-black"
        style={{ height: "100vh" }}
      >
        <div className="movie-card-container" style={{ width: "80%" }}>
          <div
            className="tags-container"
            style={{
              position: "absolute",
              zIndex: "2",
            }}
          >
            <Link to="/">Indietro</Link>
          </div>
          <div className="image-container">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${this.state.movie.Poster})` }}
            />
          </div>
          <div className="movie-info">
            <h2>Dettaglio</h2>
            <div>
              <h1>{this.state.movie.Title}</h1>
              <small>Data di Rilascio: {this.state.movie.Released}</small>
            </div>
            <h4>Valutazione: {this.state.movie.imdbRating} / 10</h4>
            <p>
              {this.state.movie.Plot && this.state.movie.Plot.substr(0, 350)}
            </p>
            <div className="tags-container">
              {this.state.movie.Genre &&
                this.state.movie.Genre.split(", ").map((g) => (
                  <span key={g}>{g}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetail);
