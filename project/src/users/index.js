import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllUsersThunk } from "./users-thunk";
import React from "react";

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
                        <div className="list-group-item">
                            {user.username}
                        </div>)
                    })
                }
            </div>
        </>
    )
}

export default Users