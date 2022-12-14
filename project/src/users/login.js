import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {loginThunk} from "./users-thunk";
import {Navigate} from 'react-router-dom';

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            console.log("Attempting to log in")
            dispatch(loginThunk({username, password}))
            console.log("Successfully logged in as ")
        } catch (e) {
            console.log(e)
        }
    }
    if (currentUser) {
        return (<Navigate to="/profile" />);
    }
    return (
        <>
            <br/>
            <h1 className="text-center">Login here</h1>
            <br/>
            <input onChange={(e) => setUsername(e.target.value)}
                   className="form-control border border-primary w-50 offset-3"
                   placeholder="Username" value={username}/>
            <input onChange={(e) => setPassword(e.target.value)} type="password"
                   className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Password" value={password}/>
            <br/>
            <p className={"w-50 offset-3"}>By continuing, I agree to SHOESCAN’s Privacy Policy and Terms of Use.</p>
            <button className="btn btn-primary mt-3 offset-3" onClick={handleLoginBtn}>
                Login
            </button>
        </>
    )
}

export default Login