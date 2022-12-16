import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findShoeBySearchTermThunk} from "./search-thunk";
import Searchings from './searchings.json'
import {Link} from "react-router-dom";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {shoes, loading} = useSelector((state) => state.shoes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findShoeBySearchTermThunk(searchTerm))}, [])

    return(
        <>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/5f205755-7e49-42ef-84c6-c2c6a85fd000/nike-just-do-it.jpg"
                 className="img-fluid mb-3" alt=""/>
            <div className="input-group">
                <input className="form-control w-75"
                       placeholder={"Search For Your Shoe"}
                       onChange={(e) => {
                           setSearchTerm(e.target.value)
                       }}
                       value={searchTerm} />
                <button className="btn btn-primary float-right"
                        onClick={() => {dispatch(findShoeBySearchTermThunk(searchTerm))}}>
                    Search
                </button>
            </div>


            <ul className="mt-4 list-group">
                {
                    shoes && shoes.map((shoe) =>
                        <li key={shoe.id} className="list-group-item border border-primary">
                            <Link to={`/details/${shoe.sku}`}>
                                <img width="100px" height="100px"
                                     src={shoe.image.small} alt="No image found"/>
                                {shoe.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Search