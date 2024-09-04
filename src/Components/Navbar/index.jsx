import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"



const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white" >
            <ul className="flex items-center gap-3">
                <li className='font-semibold'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchCategory('')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchCategory('clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchCategory('furniture')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shoes'
                        onClick={() => context.setSearchCategory('shoes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/miscellaneous'
                        onClick={() => context.setSearchCategory('miscellaneous')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    account_25@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sing-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sing In
                    </NavLink>
                </li>
                <li className="flex justify-between " >
                    <ShoppingBagIcon className="size-6 text-black-500" />
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>

    )
}
export default Navbar