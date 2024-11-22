import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

function SingUp() {
    const context = useContext(ShoppingCartContext)
    const [addName, setAddName] = useState(null)
    const [addEmail, setAddEmail] = useState(null)
    const [addPassword, setAddPassword] = useState(null)
    

    const onSubmit = () => {

        context.addUser({
            name: addName,
            email: addEmail,
            password: addPassword,
        })

    }
    return (
        <>
            <Layout>
                <div className="w-96 max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0">
                    <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                            <h5>Register with</h5>
                        </div>
                    </div>
                    <div className="flex-auto p-6">
                        <form role="form text-left" onSubmit={onSubmit}>
                            <div className="mb-4">
                                <input aria-describedby="email-addon" aria-label="Name" placeholder="Name" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text"
                                    onChange={(event) =>
                                        setAddName(event.target.value)
                                    } />
                            </div>
                            <div className="mb-4">
                                <input aria-describedby="email-addon" aria-label="Email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email"
                                    onChange={(event) => (
                                        setAddEmail(event.target.value)
                                    )} />
                            </div>
                            <div className="mb-4">
                                <input aria-describedby="password-addon" aria-label="Password" placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password"
                                    onChange={(event) => (
                                        setAddPassword(event.target.value)
                                    )} />
                            </div>
                            <div className="min-h-6 pl-7 mb-0.5 block">
                                <input defaultChecked="" value="" type="checkbox" className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" id="terms" />
                                <label htmlFor="terms" className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"> I agree the <a className="font-bold text-slate-700">Terms and Conditions</a>
                                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline ml-1 fill-current text-green-500">
                                        <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"></path>
                                    </svg>
                                </label>
                            </div>

                            <div className="text-center">
                                <Link to={'/sign-in'}>
                                    <button className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                                        onClick={() => onSubmit()}>Sign up</button>
                                </Link>
                            </div>
                            <p className="mt-4 mb-0 leading-normal text-sm">Already have an account?
                                <Link
                                    to={'/sign-in'}
                                    className="font-bold text-slate-700" >Sign in</Link></p>
                        </form>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default SingUp