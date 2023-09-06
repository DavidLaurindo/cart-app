import CartItem from "../CartItem/CartItem"
import { useContext } from 'react'
import ProductContext from '../../../contexts/ProductContext'
import Total from '../Total/Total'
import { StyledCart } from './Cart.styles.js'
import Button from "../../Button/Button"
import CartButton from "../CartButton/CartButton"


function Cart() {
    const { cartItems } = useContext(ProductContext)

    const fn = (item) =>
        <CartItem key={item.id} data={item} />

    return (
        <StyledCart>
            <div className="display-cart"><CartButton /></div>
            <section>
                <div>
                    {cartItems.map(fn)}
                </div>
                <div>Resumo do carrinho</div>
                <Total />
                <Button>Clear basket</Button>
                <Button variant="primary">Pay</Button>
            </section>
        </StyledCart>
    )
}

export default Cart