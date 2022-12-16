import {useParams} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "./users-thunk";
import {findPostingByUserThunk} from "../postings/postings-thunk";
import {Link} from "react-router-dom";

const PublicProfile = () => {
    const {uid} = useParams();
    const {publicProfile} = useSelector((state) => state.users);
    const {postings} = useSelector((state) => state.postings)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findPostingByUserThunk(uid))
    }, [])

    return (
        <>
            <h1>{publicProfile && publicProfile.username}</h1>
            <h5>{publicProfile && publicProfile.firstName} {publicProfile && publicProfile.lastName}</h5>
            <h3 className="mt-3">Shoes listed for sale</h3>
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

export default PublicProfile