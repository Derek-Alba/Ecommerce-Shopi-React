import { MinusCircleIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'



const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete, onDisminuir, cantidad, onAumentar, total } = props

    let renderXMarkIcon, renderMinusCircleIcon, renderPlus
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
        renderMinusCircleIcon = <MinusCircleIcon onClick={() => onDisminuir(id)} className='h-6 w-6 text-black cursor-pointer' />
        renderPlus = <PlusCircleIcon onClick={() => onAumentar(id)} className='h-6 w-6 text-black cursor-pointer' />
    }

    let renderCantidad = <span>Total Product: {total} </span>


    return (
        <div className="flex justify-between items-center mb-3 w-96">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'> ${price}</p>
                {renderXMarkIcon}
                <span>{cantidad ? <span></span> : renderCantidad} </span>
            </div>
            <div className='flex' >
                <span>
                    {renderMinusCircleIcon}
                </span>
                <span>
                    {cantidad}
                </span>
                <span>
                    {renderPlus}
                </span>
            </div>



        </div>
    )
}

export default OrderCard