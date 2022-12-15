import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {loginThunk, registerThunk} from "./users-thunk";
import {Navigate} from "react-router";

const Register = () => {
    const {newUser} = useSelector((state) => state.users)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        try {
            dispatch((registerThunk({email, username, password, firstName, lastName})))
        } catch (e) {}
    }

    if (newUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return (
        <>
            <h1 className="text-center">Register here</h1>
            <input onChange={(e) => setEmail(e.target.value)}
                   className="form-control border border-primary w-50 offset-3"
                   placeholder="Email" value={email} />
            <input onChange={(e) => setUsername(e.target.value)}
                   className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Username" value={username}/>
            <input onChange={(e) => setPassword(e.target.value)}
                   className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Password" value={password}/>
            <input onChange={(e) => setFirstName(e.target.value)}
                   className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="First Name" value={firstName}/>
            <input onChange={(e) => setLastName(e.target.value)}
                   className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Last Name" value={lastName}/>
            <button className="btn btn-primary mt-3 offset-3" onClick={handleRegisterBtn}>
                Register
            </button>
        </>
    )
}

export default Register