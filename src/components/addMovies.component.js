import React, { useState } from "react";

const AddMovies = () => {
	const [lists, setLists] = useState([]);
	const [inputs, setInputs] = useState({
		id: 0,
		title: "",
		rating: "",
	});

	const handleChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newList = {
			id: inputs.id,
			title: inputs.title,
			rating: inputs.rating,
		};

		console.log(newList);
		let updatedList = [...lists, newList];
		setLists(updatedList);
		setInputs({
			id: inputs.id + 1,
			title: "",
			rating: "",
		});
	};

	return (
		<>
			<div
				style={{
					border: "1px solid gray",
					width: "50rem",
					marginLeft: "20%",
					borderRadius: "10px",
					marginTop: "50px",
					boxShadow: "1px 1px 10px gray",
				}}
			>
				<form
					onSubmit={handleSubmit}
					style={{ textAlign: "center", margin: "20px" }}
				>
					<input
							style={{
								height: "3rem",
								width: "40rem",
								paddingLeft: "10px",
								marginTop: "5px",
								borderRadius: "20px",
								border: "1px solid gray",
								outline: "none",
							}}
							type="text"
							name="title"
							id="title"
							value={inputs.title}
							onChange={handleChange}
							placeholder="title"
							required
						/>
					<br />
					<input
						style={{
							height: "3rem",
							width: "40rem",
							paddingLeft: "10px",
							marginTop: "5px",
							borderRadius: "20px",
							border: "1px solid gray",
							outline: "none",
						}}
						type="text"
						name="rating"
						id="rating"
						value={inputs.rating}
						onChange={handleChange}
						placeholder="rating"
						required
					/>
					<br />
					<input
							className="btn btn-warning"
							style={{
								paddingLeft: "10px",
								marginTop: "5px",
								borderRadius: "10px",
								border: "1px solid white",
							}}
							type="submit"
							value="Add Movie"
						/>
				</form>
			</div>
			<div>
				{lists.map((list) => {
					return (
						<div style={{ marginTop: "10px" }}>
							{list.title}
							<br />
							{list.rating}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default AddMovies;
