import './profile.less'

import ProfileNav from './components/nav'
import { Outlet } from 'react-router'

const Profile = () => {
    return (
        <div className="profile-page">
            {/* <h1>Profile</h1> */}
            <ProfileNav></ProfileNav>
            <div className="view-component">
                <Outlet />
            </div>
        </div>
    )
}

export default Profile