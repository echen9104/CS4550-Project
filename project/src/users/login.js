const Login = () => {
    return (
        <>
            <h1 className="text-center">Login here</h1>
            <input className="form-control border border-primary w-50 offset-3"
                   placeholder="Username" />
            <input className="mt-3 form-control border border-primary w-50 offset-3"
                   placeholder="Password" />
            <button className="btn btn-primary mt-3 offset-3">
                Login
            </button>
        </>
    )
}

export default Login