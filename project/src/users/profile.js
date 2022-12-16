import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {deletePostingThunk, findPostingsByUserThunk} from "../postings/postings-thunk";
import {useEffect} from "react";
import {TrashFill} from "react-bootstrap-icons";
import './profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users);
    const {postings} = useSelector((state) => state.postings);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostingsByUserThunk(currentUser._id))
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
            <h1>Here are your current listings:</h1>
            <ul className="list-group mt-4 mb-4">
                {
                    postings && postings.map((post) =>
                        <li key={post._id} className="list-group-item">
                            <div className="row">
                                <div className="col-9">
                                    <img height={100}
                                         src={post.image}/>
                                    <Link to={`/details/${post.skuID}`}>
                                        ${post.asking} for {post.name}
                                    </Link>
                                </div>
                                <div className="col-auto"></div>
                                <TrashFill className="col-2 nudge-down" size={50}
                                        onClick={() => {dispatch(deletePostingThunk(post._id))}}/>
                            </div>
                        </li>
                    )
                }
            </ul>
            
        </>
    )
}

export default Profile