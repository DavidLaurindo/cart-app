import CartItem from "../CartItem/CartItem"
import { useContext } from 'react'
import ProductContext from '../../../contexts/ProductContext'
import Total from '../Total/Total'
import { Section, Button } from './Cart.styles.js'


function Cart() {
    const { cartItems } = useContext(ProductContext)

    const fn = (item) =>
        <CartItem key={item.id} data={item} />

    return (
        <Section>
            <div>
                {cartItems.map(fn)}
            </div>
            <div>Resumo do carrinho</div>
            <Total />
            <Button>Clear basket</Button>
            <Button variant="primary">Pay</Button>
        </Section>
    )
}

export default Cart