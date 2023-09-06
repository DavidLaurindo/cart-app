import { useContext, useEffect, useState } from "react"
import ProductContext from "../../../contexts/ProductContext"
import { StyledCartButton } from "./CartButton.styles"

function CartButton() {
    const { cartItems } = useContext(ProductContext)
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        const qtyButtonCart = cartItems.reduce((total, item) => total + item.qty, 0)
        setQtyCart(qtyButtonCart)
    }, [cartItems])

    return (
        <StyledCartButton>
            <h2>Cart</h2>
            {qtyCart > 0 ? (
            <button type="button">
                <span>{qtyCart}</span>
            </button>
            ) : null}
        </StyledCartButton>
    )
}

export default CartButton