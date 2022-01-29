import { Link } from "react-router-dom";
import logo from "../images/imdb_logo.png";

const Navbar = ({ handleSearch, handleEnter }) => {
	return (
		<>
			<nav className="navbar navbar-light bg-dark">
				<Link className="navbar-brand" to="/" style={{ color: "white" }}>
					<img
						style={{ marginLeft: "6px", width: "4rem" }}
						src={logo}
						alt="null"
					></img>{" "}
				</Link>

				<span
					style={{
						marginTop: "18px",
						width: "50%",
					}}
					className="input-group mb-2"
				>
					<div className="input-group-prepend">
						<span className="input-group-text">All</span>
					</div>
					<input
						type="text"
						onChange={handleSearch}
						onKeyDown={handleEnter}
						required
						className="form-control"
						placeholder="Search IMDb"
					/>
				</span>

				<span>
					<Link className="navbar-brand" to="/movies" style={{ color: "white", textDecoration: 'none', marginRight: '30px', fontSize: '15px'}}>IMDb Movies</Link>
                    <Link className="navbar-brand" to="/signIn" style={{ color: "white", textDecoration: 'none', marginRight: '100px', fontSize: '15px'}}>Sign In</Link>
				</span>
			</nav>
		</>
	);
};

export default Navbar;
