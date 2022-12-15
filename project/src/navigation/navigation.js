import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <ul className="nav nav-pills">
            <div className="row fs-3">
                <li className={`nav-item active col-auto`}>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className={`nav-item col-auto`}>
                    <Link to="/search">
                        Search Products
                    </Link>
                </li>
                <li className={`nav-item col-auto`}>
                    <Link to="/users">
                        Users
                    </Link>
                </li>
                <li className={`nav-item col-auto`}>
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>
                <li className={`nav-item col-auto`}>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li className={`nav-item col-auto`}>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
            </div>
        </ul>
    )
}

export default Navigation