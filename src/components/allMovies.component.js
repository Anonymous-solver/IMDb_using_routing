import React, { useEffect, useState } from 'react';
import getMovies from '../service/get-movies.service';
import Table from './common/table.component';
import _ from "lodash";

const Allmovies = () => {
    const [movies, setMovies] = useState([]);

    const [sortColumn, setSortColumn] = useState({
		path: "rank",
		order: "asc",
	});

    const handleSort = (sortColumn) => {
		setSortColumn(sortColumn);
	};

    const sortMovies = (movies) => {
		const sortedMovies = _.orderBy(
			movies,
			[sortColumn.path],
			[sortColumn.order]
		);
		return sortedMovies;
	};

    const sortedMovies = sortMovies(movies);

    useEffect(() => {
		const movies = getMovies();
		setMovies(movies);
	}, []);

    const columns = [
		{
			label: "Image",
			path: "image",
			content: (movie, key) => (
				<td>
					{" "}
					<img
						style={{ width: "3rem" }}
						src={movie[key]}
						alt="null"
					/>
				</td>
			),
		},
		{
			label: "Rank",
			path: "rank",
			sorting: true,
			content: (movie, key) => <td> {movie[key]}</td>,
		},
		{
			label: "Title",
			path: "title",
			sorting: true,
			content: (movie, key) => (
				<td style={{ color: "#136CB2" }}> {movie[key]}</td>
			),
		},
		{
			label: "IMDb Rating",
			path: "imdb_rating",
			content: (movie, key) => (
				<td>
					{" "}
					<i className="fa fa-star" style={{ color: "gold" }}></i>
					{movie[key]}
				</td>
			),
		},
	];

    return (
        <>
        <div>

				<div
					className="list-container"
					style={{
						marginLeft: "10px",
						marginRight: "10px",
						paddingRight: "10px",
					}}
				>
					<Table
						items={sortedMovies}
						columns={columns}
						onSort={handleSort}
						sortColumn={sortColumn}
					></Table>
				</div>
			</div>
        </>
    );
};

export default Allmovies;