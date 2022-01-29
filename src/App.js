import { useEffect, useState } from "react";
import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";
import getGenres from "./service/get-genres.service";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound.component";
import Allmovies from "./components/allMovies.component";
import SignIn from "./components/signIn.component";
import AddMovies from "./components/addMovies.component";

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
			<Navbar
				handleEnter={handleEnter}
				handleSearch={handleSearch}
			></Navbar>

			<Switch>
				<Route
					exact
					path="/"
					render={(props) => (
						<Movies
							genres={genres}
							selectedGenre={selectedGenre}
							handleClickFilter={handleClickFilter}
							{...props}
						></Movies>
					)}
				/>
				<Route path="/movies" component={Allmovies}></Route>
				<Route path="/signIn" component={SignIn}></Route>
                <Route path='/addMovies'component={AddMovies}></Route>
                <Route path='/*'component={NotFound}></Route>
			</Switch>
		</div>
	);
}

export default App;
