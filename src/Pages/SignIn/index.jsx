import { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
function SignIn() {
    const context = useContext(ShoppingCartContext)
    // Usuario Guardado
    const [savedUser, setSavedUser] = useState(null)
    const [savedPassword, setSavedPassword] = useState(null)
    let userValid = false

    if ((context.users.email === savedUser) && (savedPassword === context.users.password)) {
        userValid = true
       
    } else {
        userValid = false
        context.saveSign(false)
    }




    return (
        <>
            <Layout>
                <div
                    className="w-96 rounded-lg shadow h-96 p-6 bg-white relative overflow-hidden mt-9">
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <h2 className="text-2xl font-medium text-slate-700">Login</h2>
                        <p className="text-slate-500">Enter details below.</p>
                    </div>
                    <form className="w-full mt-4 space-y-3 " >
                        <div>
                            <input
                                className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Username"
                                id="username"
                                name="username"
                                type="text"
                                onChange={(event) => (
                                    setSavedUser(event.target.value)
                                )}
                            />
                        </div>
                        <div>
                            <input
                                className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Password"
                                id="password"
                                name="password"
                                type="password"
                                onChange={(event) => (
                                    setSavedPassword(event.target.value)
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    className="mr-2 w-4 h-4"
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                />
                                <span className="text-slate-500">Remember me </span>
                            </div>
                            <a className="text-blue-500 font-medium hover:underline" href="#"
                            >Forgot Password</a
                            >
                        </div>

                        <Link to={userValid ? '/' : '/sign-in'}>
                            <button
                                className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                                id="login"
                                name="login"
                                onClick={() => context.saveSign(true)}
                            >
                                login
                            </button>
                        </Link>
                        <p className="flex justify-center space-x-1">
                            <span className="text-slate-700"> Have an account? </span>
                            <Link to={'/sing-up'}
                                className="text-blue-500 hover:underline" >
                                Sign Up
                            </Link>

                        </p>
                    </form>
                </div>



            </Layout >
        </>
    )
}

export default SignIn