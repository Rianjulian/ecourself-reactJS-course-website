import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="grid gap-8 xl:place-content-center">
            <h1 className="urbanist text-3xl font-medium">Log in</h1>
            <form action="" className="grid gap-5">
                <input type="email" name="" id="" className="px-5 py-3 bg-indigo-100 xl:w-[400px]" placeholder="Email"/>
                <input type="password" name="" id="" className="px-5 py-3 bg-indigo-100 xl:w-[400px]" placeholder="Password"/>
            </form>
            <button type="submit" className="bg-soft-purple text-white py-3">Login</button>
            <Link to="/register" className="text-center urbanist text-soft-purple p-3">Create new account</Link>
        </div>
    )
}

export default Login