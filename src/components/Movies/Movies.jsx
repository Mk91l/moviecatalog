import React, { Component } from "react";
import MovieCards from "../MovieCards/MovieCards";
import MovieTable from "../MovieTable/MovieTable";
import NoFilmFound from "../NoFilmFound/NoFilmFound";
require("./Movies.css");

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          Title: "The Avengers",
          Year: "2012",
          imdbID: "tt0848228",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Age of Ultron",
          Year: "2015",
          imdbID: "tt2395427",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "1998",
          imdbID: "tt0118661",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers: Earth's Mightiest Heroes",
          Year: "2010–2012",
          imdbID: "tt1626038",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
        },
        {
          Title: "Ultimate Avengers: The Movie",
          Year: "2006",
          imdbID: "tt0491703",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
        },
        {
          Title: "Ultimate Avengers II",
          Year: "2006",
          imdbID: "tt0803093",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "1961–1969",
          imdbID: "tt0054518",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        },
      ],
      filteredMovies: [],
      inputSearch: this.props.inputSearch,
      showCards: true,
    };
  }

  componentDidMount() {
    this.filtering();
  }

  componentDidUpdate() {
    if (this.state.inputSearch !== this.props.inputSearch) {
      this.filtering();
    }
  }

  filtering() {
    let value = this.props.inputSearch;
    let filteredList = this.state.movies.filter((item) =>
      Object.values(item).find((val) =>
        val.toString().toUpperCase().includes(value.toUpperCase())
      )
    );
    this.setState({
      filteredMovies: value ? filteredList : this.state.movies,
      inputSearch: value,
    });
  }

  showCardsToggle = () => {
    this.setState({ showCards: !this.state.showCards });
  };

  render() {
    const movies = this.state.showCards ? (
      <MovieCards movies={this.state.filteredMovies} />
    ) : (
      <MovieTable movies={this.state.filteredMovies} />
    );

    return (
      <div className="container-fluid bg-dark" style={{ height: "100%" }}>
        {this.state.filteredMovies.length === 0 ? (
          <NoFilmFound query={this.props.inputSearch} />
        ) : (
          <React.Fragment>
            <div className="d-flex flex-column align-items-end mb-2">
              <div className="p-0 mt-4 my-md-4 offset-8 offset-md-11 text-center">
                <button
                  className="btn btn-sm py-0 btn-warning btn-double-l"
                  disabled={!this.state.showCards}
                  onClick={this.showCardsToggle}
                >
                  <i className="fas fa-th-list"></i>
                </button>
                <button
                  className="btn btn-sm py-0 btn-warning btn-double-r"
                  disabled={this.state.showCards}
                  onClick={this.showCardsToggle}
                >
                  <i className="fas fa-th-large"></i>
                </button>
              </div>
            </div>
            <div className="list-movie m-4 mb-0 m-lg-2 mb-lg-0 row justify-content-center">
              {movies}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Movies;
