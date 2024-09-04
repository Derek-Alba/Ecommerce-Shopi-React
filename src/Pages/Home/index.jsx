import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

function Home() {
    const context = useContext(ShoppingCartContext)
    const renderView = () => {

        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map((item) => (
                    <Card data={item} key={item.id} />
                ))
            )
        } else {
            return (
                <div className=" absolute flex items-center justify-center w-full left-0 top-80 font-bold text-3xl">
                    We don't have anything :(
                </div>
            )
        }
    }

    return (
        <>
            <Layout>
                <div className="flex w-80 items-center justify-center relative mb-4">
                    <h1 className="font-bold text-3xl">
                        Exclusive Products
                    </h1>
                </div>
                <div id="input" className="relative mb-8" >
                    <input
                        type="text"
                        id="floating_outlined"
                        className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]
                        hadow-md focus:shadow-lg focus:shadow-black"
                        placeholder=""
                        onChange={(event) => context.setSearchByTitle(event.target.value)}
                    />
                    <label
                        htmlFor="floating_outlined"
                        className="absolute text-[14px] leading-[150%] text-primary peer-placeholder-shown:text-slate-300 peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Search...
                    </label>
                    <div className="absolute top-3 right-3">
                        <MagnifyingGlassIcon className="h-6 w-6 text-black cursor-pointer" />
                    </div>
                </div>
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
                    {renderView()}
                </div>
                <ProductDetail />


            </Layout>
        </>
    )
}

export default Home