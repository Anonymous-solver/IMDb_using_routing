import React, { useState } from "react";

const SignIn = () => {
	const [lists, setLists] = useState([]);
	const [inputs, setInputs] = useState({
		id: 0,
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newList = {
			id: inputs.id,
			fullName: inputs.fullName,
			email: inputs.email,
			password: inputs.password,
			confirmPassword: inputs.confirmPassword,
		};

		console.log(newList);
		let updatedList = [...lists, newList];
		setLists(updatedList);
		setInputs({
			id: inputs.id + 1,
			fullName: "",
			email: "",
			password: "",
			confirmPassword: "",
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
						name="fullName"
						id="fullName"
						value={inputs.fullName}
						onChange={handleChange}
						placeholder="Enter your name"
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
						name="email"
						id="email"
						value={inputs.email}
						onChange={handleChange}
						placeholder="Enter your email"
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
						name="password"
						id="password"
						value={inputs.password}
						onChange={handleChange}
						placeholder="Enter your password"
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
						name="confirmPassword"
						id="confirmPassword"
						value={inputs.confirmPassword}
						onChange={handleChange}
						placeholder="Confirm password"
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
						value="Create a New Account"
					/>
				</form>
			</div>
			<div>
				{lists.map((list) => {
					return (
						<div style={{marginTop: '10px'}}>
							{list.fullName}
							<br />
							{list.email}
							<br />
							{list.password}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default SignIn;
