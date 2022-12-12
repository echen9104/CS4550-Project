import './nav.less'

import { Link } from 'react-router-dom'
import UserBox from '@/components/userBox/userBox'

const Nav = () => {

    return (
        <div className="header-box">
            <div className="logo-box">
                <Link to="/">StockX</Link>
            </div>
            <div className="right-box">
                <div className="search-box">
                    <img src="/images/icon/search-icon.png" alt="" />
                    <input type="text" placeholder="Search for brand, color, etc." />
                </div>
                <ul className="nav-box">
                    <Link to="/product" className="nav-item">Product</Link>
                </ul>
                <UserBox></UserBox>
            </div>
           
        </div>
    )
}
export default Nav