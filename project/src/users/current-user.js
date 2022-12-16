import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "./users-thunk";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk())
    }, [])

    return children;
}

export default CurrentUser