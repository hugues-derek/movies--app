import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/movie";
import Heading from "./components/heading";
import Footer from "./components/footer";

function App() {
	const FEATURED_API =
		"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

	const SEARCH_API =
		"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

	const [movies, setmovies] = useState([]);
	const [valueTerm, setvalueTerm] = useState("");

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await fetch(FEATURED_API);
		const data = await response.json();

		if (data.results) {
			setmovies(data.results);
		}
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();

		fetch(SEARCH_API + valueTerm)
			.then((res) => res.json())
			.then((data) => (valueTerm !== "" ? setmovies(data.results) : null));
	};

	const handleOnChange = (e) => {
		// ici se trouve la probable erreur
		setvalueTerm(e.target.value);
	};

	return (
		<>
			<header>
				<Heading title="Movies" />
				<form onSubmit={handleOnSubmit}>
					<input
						className="search"
						type="text"
						placeholder="rechercher..."
						value={valueTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>
			<div className="movie-container">
				{movies.map((movie) => (
					<Movie key={movie.id} {...movie} />
				))}
			</div>
			<Footer />
		</>
	);
}

export default App;
