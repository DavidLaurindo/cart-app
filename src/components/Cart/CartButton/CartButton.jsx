import { useContext, useEffect, useState } from "react"
import ProductContext from "../../../contexts/ProductContext"

function CartButton() {
    const { cartItems } = useContext(ProductContext)
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        const qtyButtonCart = cartItems.reduce((total, item) => total + item.qty, 0)
        setQtyCart(qtyButtonCart)
    }, [cartItems])

    return (
        <button type="button">Cart
            <span>{qtyCart}</span>
        </button>
    )
}

export default CartButton