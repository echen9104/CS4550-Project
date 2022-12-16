import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {registerThunk} from "./users-thunk";
import {Navigate} from 'react-router-dom';
import "./users.css"

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        try {
            console.log("Attempting to register User")
            console.log(role)
            dispatch((registerThunk({email, username, password, firstName, lastName, role})))
            console.log("User is successfully register")
        } catch (e) {
            console.log(e)
        }
    }

    if (currentUser) {
        return (<Navigate to="/profile" />);
    }
    return (
        <>
            <h1 className="text-center">Register here</h1>
            <div class='container position-relative pt-5'>
                <div class={'row'}>
                    <div class={'col-md-4'}>
                        <div class={'row hidden-mob'}>
                            <div className={"pic1"}>
                                <img src={"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={"250px"} alt={"shoe"} />
                            </div>
                            <div className={'pic2'}>
                                <img src={"https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={"225px"} alt={"shoe2"}/>
                            </div>
                        </div>
                    </div>
                    <div class={'col-lg-8 input-item'}>
                        <input onChange={(e) => setEmail(e.target.value)}
                               className="form-control border border-primary w-50 offset-3"
                               placeholder="Email" value={email} type="email" required/>
                        <input onChange={(e) => setUsername(e.target.value)}
                               className="mt-3 form-control border border-primary w-50 offset-3"
                               placeholder="Username" value={username} type="text" required/>
                        <input onChange={(e) => setPassword(e.target.value)}
                               className="mt-3 form-control border border-primary w-50 offset-3"
                               placeholder="Password" value={password} type="password" required/>
                        <input onChange={(e) => setFirstName(e.target.value)}
                               className="mt-3 form-control border border-primary w-50 offset-3"
                               placeholder="First Name" value={firstName} type="text" required/>
                        <input onChange={(e) => setLastName(e.target.value)}
                               className="mt-3 form-control border border-primary w-50 offset-3"
                               placeholder="Last Name" value={lastName} type="text" required/>
                        <select className="mt-3 form-control border border-primary w-50 offset-3"
                                onChange={(e) => setRole(e.target.value)}
                                aria-label="Default select example" required>
                            <option defaultValue={""}>Select Your Role</option>
                            <option value="Business">Business</option>
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <button className="btn btn-primary mt-3 offset-3" onClick={handleRegisterBtn}>
                            Register
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register