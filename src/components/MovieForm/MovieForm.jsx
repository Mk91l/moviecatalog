import React, { Component } from "react";
import { withRouter } from "react-router";
import "./MovieForm.css";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbID: "",
      updateForm: false,
      movie: {
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Released: "",
        imdbRating: "",
        Genre: "",
        Poster: "",
      },
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    if (id) {
      this.setState({
        imdbID: id,
        updateForm: true,
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
      });
    }
  }

  setFieldValue = (event) => {
    const movieForm = { ...this.state.movie };
    movieForm[event.target.id] = event.target.value;
    this.setState({ movie: movieForm });
  };

  submitAdd = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state.movie));
  };

  submitUpdate = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state.movie));
  };

  render() {
    return (
      <div
        className="movie-form container-fluid d-flex justify-content-center bg-black"
        style={{ height: "100vh" }}
      >
        <form className="row g-3 my-3" style={{ width: "80%" }}>
          <h3 className="align-item-center">Aggiungi un film</h3>
          <div className="row my-2">
            <div className="col-md-4">
              <label className="form-label">Titolo</label>
              <input
                type="text"
                className="form-control"
                id="Title"
                value={this.state.movie.Title}
                onChange={this.setFieldValue}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Anno</label>
              <input
                type="text"
                className="form-control"
                id="Year"
                value={this.state.movie.Year}
                onChange={this.setFieldValue}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <label className="form-label">Poster</label>
              <input
                type="text"
                className="form-control"
                id="Poster"
                value={this.state.movie.Poster}
                onChange={this.setFieldValue}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6">
              <label className="form-label">Data di Rilascio</label>
              <input
                type="text"
                className="form-control"
                id="Released"
                value={this.state.movie.Released}
                onChange={this.setFieldValue}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tipo</label>
              <input
                ttype="text"
                className="form-control"
                id="Type"
                value={this.state.movie.Type}
                onChange={this.setFieldValue}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6">
              <label className="form-label">Tipologia</label>
              <input
                type="text"
                className="form-control"
                id="Genre"
                value={this.state.movie.Genre}
                onChange={this.setFieldValue}
              />
            </div>
            <div className="col-md-6">
              <label className="form-check-label">Valutazione</label>
              <input
                type="text"
                className="form-control"
                id="Rating"
                value={this.state.movie.imdbRating}
                onChange={this.setFieldValue}
              />
            </div>
          </div>
          <div className="col-12">
            {!this.state.updateForm ? (
              <button
                type="submit"
                className="btn btn-warning"
                style={{ marginLeft: "80%" }}
                onClick={this.submitAdd}
              >
                Aggiungi film
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-warning"
                style={{ marginLeft: "80%" }}
                onClick={this.submitUpdate}
              >
                Modifica film
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(MovieForm);
