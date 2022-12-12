import './UserBox.less'

import { Link } from 'react-router-dom'

const UserBox = () => {
    const loginState = false
    return (
        <>
            {
                !loginState
                    ? 
                        (
                            <div className="opt-box">
                                <Link to="/login" className="btn login">Login</Link>
                                <Link to="/register" className="btn bg-blank register">Sign Up</Link>
                            </div>
                        )
                    :
                        (
                            <div className="user-box">
                                <div className="user-name">username</div>
                                <div className="option-wrap">
                                    <ul className="option-box">
                                        <a className="option-item">Logout</a>
                                    </ul>
                                </div>
                            </div>
                        )
            }
        </>
        
    )
}

export default UserBox