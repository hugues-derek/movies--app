import React from "react";

let IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, backdrop_path, overview, vote_average }) => (
	<div className="movie">
		<img src={IMAGES_API + backdrop_path} alt={title} />
		<div className="movie-info">
			<h3>{title}</h3>
			<span>{vote_average}</span>
		</div>
		<div className="movie-over">
			<h2>overview:</h2>
			<p>{overview}</p>
		</div>
	</div>
);

export default Movie;
