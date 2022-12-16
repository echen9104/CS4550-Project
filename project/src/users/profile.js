import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {findPostingByUserThunk} from "../postings/postings-thunk";
import {useEffect} from "react";

const Profile = () => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users);
    const {postings} = useSelector((state) => state.postings);
    const dispatch = useDispatch();
    console.log(currentUser._id)
    useEffect(() => {
        dispatch(findPostingByUserThunk(currentUser._id))
    }, [])
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    return(
        <>
            <div className="">
                <span className="fs-1">Profile</span>
                <button className="btn btn-danger float-end"
                        onClick={() => {handleLogoutBtn()}}>
                    Logout
                </button>
            </div>
            <h2 className="mb-4">Hi {currentUser.firstName}!</h2>
            <h1>Your listings</h1>
            <ul className="list-group mt-4">
                {
                    postings && postings.map((post) =>
                        <li key={post._id} className="list-group-item">
                            <Link to={`/details/${post.skuID}`}>
                                ${post.asking} for {post.skuID}
                            </Link>
                        </li>
                    )
                }
            </ul>

        </>
    )
}

export default Profile