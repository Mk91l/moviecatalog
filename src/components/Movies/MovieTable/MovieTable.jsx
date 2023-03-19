import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  deleteMovie = (movieId) => {
    console.log("Film eliminato " + movieId);
  };

  renderTableData() {
    return this.props.movies.map((movie, index) => {
      return (
        <tr key={movie.imdbID + "-" + index}>
          <td>{movie.imdbID}</td>
          <td>{movie.Title}</td>
          <td>{movie.Type}</td>
          <td>{movie.Year}</td>
          <td>
            <Link to={"/movies/detail/" + movie.imdbID}>
              <button className="btn btn-sm py-0 btn-warning">
                <i className="fas fa-info"></i>
              </button>
            </Link>
            {localStorage.getItem("isLogged") === "true" ? (
              <React.Fragment>
                <Link className="ml-2" to={"/movies/update/" + movie.imdbID}>
                  <button className="btn btn-sm py-0 mx-1 btn-warning">
                    <i className="fas fa-pen"></i>
                  </button>
                </Link>
                <button
                  className="btn btn-sm py-0 btn-warning"
                  onClick={() => this.deleteMovie(movie.imdbID)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </React.Fragment>
            ) : null}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITOLO</th>
              <th>TIPO</th>
              <th>ANNO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default MovieTable;
