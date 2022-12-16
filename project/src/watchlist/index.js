import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findPostingsWatchedByUserThunk} from "./watchlist-thunk";

const Watchlist = ({uid, p1, p2}) => {
    // const {watchings} = useSelector((state) => state.watchings)

    const watchings = [uid]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPostingsWatchedByUserThunk(uid))
    }, [])
    return(
        <>
            <h1>Watchlist:</h1>
            <div className="list-group mt-3">
                {
                    watchings.map((watching) =>
                        <div>
                            <pre>
                                {JSON.stringify(watching, null, 2)}
                            </pre>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Watchlist