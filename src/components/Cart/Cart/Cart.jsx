import './Cart.css'
import CartItem from "../CartItem/CartItem"
import { useContext } from 'react'
import ProductContext from '../../../contexts/ProductContext'
import Total from '../Total/Total'


function Cart() {
    const { cartItems } = useContext(ProductContext)

    const fn = (item) =>
        <CartItem key={item.id} data={item} />

    return (
        <section className='cart'>
            <div>
                {cartItems.map(fn)}
            </div>
            <div>Resumo do carrinho</div>
            <Total />
        </section>
    )
}

export default Cart