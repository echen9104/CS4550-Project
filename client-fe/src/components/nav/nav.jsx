import './nav.less'

const Nav = () => {
    return (
        <div className="header-box">
            <div className="logo-box">StockX</div>
            <div className="right-box">
                <ul className="nav-box">
                    <li className="nav-item">Browse</li>
                    <li className="nav-item">News</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Help</li>
                    <li className="nav-item">Sell</li>
                </ul>
                <div className="opt-box">
                    <a href="">Login</a>
                    <a href="">Sign Up</a>
                </div>
            </div>
        </div>
    )
}
export default Nav