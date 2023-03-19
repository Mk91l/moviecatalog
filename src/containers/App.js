import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Movies from '../components/Movies/Movies';
import Login from '../components/Login/Login';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieForm from '../components/MovieForm/MovieForm';
import NoAccess from '../components/NoAccess/NoAccess';
import Footer from '../components/Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSearch: ''
        }
        localStorage.setItem("isLogged", false);
    }

    setInputSearch = (value) => {
        this.setState({ inputSearch: value })
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar setInputSearch={this.setInputSearch} />
                <Route exact path="/login" render={() => <Login />} />
                <Route exact path={["/", "/movies"]} render={() => <Movies inputSearch={this.state.inputSearch} />} />
                <Route exact path={["/movies/add", "/movies/update/:id"]}
                    render={() => localStorage.getItem('isLogged') === 'true' ? <MovieForm /> : <NoAccess />} />
                <Route exact path="/movies/detail/:id" render={() => <MovieDetail />} />
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
