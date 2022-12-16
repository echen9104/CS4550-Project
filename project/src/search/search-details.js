import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findShoeBySkuThunk} from "./search-thunk";
import {findPostingsBySkuThunk,createPostingThunk,deletePostingThunk} from "../postings/postings-thunk";
import {Link} from "react-router-dom";
import searchings from './searchings.json'

const SearchDetails = () => {
    const navigate = useNavigate();
    const {skuID} = useParams();
    const [post, setPosting] = useState(0)
    const {details} = useSelector((state) => state.shoes);
    const {postings} = useSelector((state) => state.postings)
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findShoeBySkuThunk(skuID))
        dispatch(findPostingsBySkuThunk(skuID))
    },[])

    const handlePostListingBtn = () => {
        dispatch(createPostingThunk({
            asking: post,
            skuID: first.sku,
            name: first.name,
            image: first.image.small
        }))
    }

    const handleBuyBtn = (pid) => {
        dispatch(deletePostingThunk(pid))
        navigate('/thanks')
    }

    const first = details
    return (
        <>
            <h1>{first.name}</h1>
            {/*Shoe image with some description of the shoe*/}
            <div className="row">
                <img height={400} className="border border-primary col-auto"
                     src={first.image.original} alt="">
                </img>
                <div className="col-auto w-50">
                    <div className="">
                        Brand: {first.brand}
                    </div>
                    <br/>
                    <div className="">
                        Release Date: {first.releaseDate}
                    </div>
                    <br/>
                    <div className="">
                        Color: {first.colorway}
                    </div>
                    <br/>
                    <div className="">
                        Estimated market value: ${first.estimatedMarketValue}
                    </div>
                </div>
            </div>
            {/*Postings for the shoe*/}
            <h3 className="mt-4 mb-4">Listings for {first.name}</h3>
            {
                currentUser &&
                <div className="input-group mb-4">
                    <span className="input-group-text">$</span>
                    <input className="form-control" type="number"
                           placeholder="Input asking price here"
                           onKeyDown={(e) => {
                               if (e.key === '.') {
                                   e.preventDefault();
                               }
                           }}
                           onChange={(e) => {setPosting(e.target.value)}} />
                    <button className="btn btn-primary"
                            onClick={() => handlePostListingBtn()}>
                        Add listing
                    </button>
                </div>
            }

            <ul className="list-group">
                {
                    postings && postings.map((post) =>
                        <li key={post._id} className="list-group-item">
                            <div className="row">
                                <div className="col-9">
                                    <div>Asking for ${post.asking}</div>
                                    Listed by user:
                                    <Link to={`/profile/${post.user}`}>{post.user}</Link>
                                </div>
                                {
                                    currentUser && (currentUser._id === post.user) ?
                                        <button className="btn btn-danger col-2"
                                                onClick={() => {dispatch(deletePostingThunk(post._id))}}>
                                            Remove
                                        </button> :
                                        currentUser &&
                                        <button className="btn btn-success col-2"
                                                onClick={() => {handleBuyBtn(post._id)}}>
                                            Buy Now
                                        </button>
                                }
                            </div>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default SearchDetails