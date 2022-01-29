import { useEffect, useState } from "react";
import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";
import getGenres from "./service/get-genres.service";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/notFound.component";
import Allmovies from "./components/allMovies.component";
import SignIn from "./components/signIn.component";

var searchValue = "";
function App() {
	const [genres, setGenres] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState("All Genres");

	useEffect(() => {
		const genres = ["All Genres", ...getGenres()];
		setGenres(genres);
	}, []);

	const handleSearch = (event) => {
		searchValue = event.target.value;
	};

	const handleEnter = (event) => {
		if (event.key === "Enter") {
			if (searchValue.length > 1) {
				setSelectedGenre(searchValue);
				event.target.value = "";
			}
		}
	};

	const handleClickFilter = (selectedGenre) => {
		setSelectedGenre(selectedGenre);
	};

	return (
		<div>
			<Router>
				<Navbar
					handleEnter={handleEnter}
					handleSearch={handleSearch}
				></Navbar>

				<Switch>
					<Route exact path="/">
						<Movies
							genres={genres}
							selectedGenre={selectedGenre}
							handleClickFilter={handleClickFilter}
						></Movies>
					</Route>
					<Route path="/movies">
						<Allmovies></Allmovies>
					</Route>
					<Route path="/signIn">
						<SignIn></SignIn>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
