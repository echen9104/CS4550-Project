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

    console.log(shoes)
    return(
        <>
            <div className="input-group">
                <input className="form-control w-75"
                       onChange={(e) => {
                           setSearchTerm(e.target.value)
                       }}
                       value={searchTerm} />
                <button className="btn btn-primary float-right"
                        onClick={() => {dispatch(findShoeBySearchTermThunk(searchTerm))}}>
                    Search
                </button>
            </div>
            <ul className="mt-2 list-group">
                {
                    Searchings && Searchings.map((shoe) =>
                        <li key={shoe.ID} className="list-group-item">
                            <img width="100px" height="100px"
                                 src={shoe.image.small} alt=""/>
                            {shoe.name}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Search