import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Jordan 1s')
    const {shoes, loading} = useSelector((state) => state.shoes)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(findShoeBySearchTermThunk(searchTerm))}, [])
    return (
        <>
            <h1>Shoe Scan Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-primary"
                            onClick={() => {dispatch(findShoeBySearchTermThunk(searchTerm))}}>
                        Search
                    </button>
                    <input className="form-control w-75"
                           onChange={(e) => {setSearchTerm(e.target.value)}}
                           value={searchTerm}/>
                </li>
                <li>
                    ${shoes}
                </li>
            </ul>
        </>
    )
}

export default Search