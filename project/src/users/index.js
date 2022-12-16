import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {deleteUserThunk, findAllUsersThunk} from "./users-thunk";
import React from "react";
import {Link} from "react-router-dom";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    return(
        <>
            <h1>Users</h1>
            <div className="list-group">
                {
                    users.map((user) => { return(
                        <>
                            <div className="list-group-item border border-primary" key={user._id}>
                                <div className="row">
                                    <Link to={`/profile/${user._id}`} className="col-10">{user.username}</Link>
                                    {
                                        currentUser && currentUser.role === 'Admin' && user.role !== 'Admin' ?
                                            <button className="col-2 btn btn-danger"
                                                    onClick={() => {dispatch(deleteUserThunk(user._id))}}>
                                                Delete User
                                            </button> : <></>
                                    }
                                </div>
                            </div>
                        </>
                    )})
                }
            </div>
        </>
    )
}

export default Users