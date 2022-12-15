const Register = () => {
    return (
        <>
            <h1 className="text-center">Register here</h1>
            <input className="form-control border border-primary w-50 offset-3"
                   placeholder="Email" />
            <input className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Username" />
            <input className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Password" />
            <input className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="First Name" />
            <input className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Last Name" />
            <button className="btn btn-primary mt-3 offset-3">
                Register
            </button>
        </>
    )
}

export default Register