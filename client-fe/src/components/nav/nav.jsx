import './nav.less'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="header-box">
            <div className="logo-box">
                <Link to="/">ShoeS</Link>
            </div>
            <div className="right-box">
                <div className="search-box">
                    <img src="/images/icon/search-icon.png" alt="" />
                    <input type="text" placeholder="Search for brand, color, etc." />
                </div>
                <ul className="nav-box">
                    <Link to="/search" className="btn">Search</Link>
                    <Link to="/product" className="nav-item">Product</Link>
                </ul>
                <div className="opt-box">
                    <Link to="/login" className="btn login">Login</Link>
                    <Link to="/register" className="btn bg-blank register">Sign Up</Link>
                </div>
            </div>
           
        </div>
    )
}
export default Nav