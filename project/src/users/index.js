import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllUsersThunk } from "./users-thunk";
import React from "react";
import {Link} from "react-router-dom";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(findAllUsersThunk())}, [])
    console.log(users)
    return(
        <>
            <h1>Users</h1>
            <div className="list-group">
                {
                    users.map((user) => { return(
                        <Link to={`/profile/${user._id}`} className="list-group-item" key={user.id}>
                            {user.username}
                        </Link>)
                    })
                }
            </div>
        </>
    )
}

export default Users