import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import searchings from './searchings.json'
import {useEffect} from "react";
import {findShoeBySkuThunk} from "./search-thunk";

const SearchDetails = () => {
    const {skuID} = useParams();
    const {details} = useSelector((state) => state.shoes);
    const {postings} = useSelector((state) => state.postings)
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findShoeBySkuThunk(skuID))
    },[])

    const first = searchings[0]
    return (
        <>
            <h1>{first.name}</h1>
            <div className="row">
                <img height={400} className="border border-primary col-auto"
                     src={first.image.original}>
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
        </>
    )
}

export default SearchDetails