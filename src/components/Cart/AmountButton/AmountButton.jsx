import { useContext } from "react"
import ProductContext from "../../../contexts/ProductContext"

function AmountButton({ data }) {

    const{cartItems, setCartItems} = useContext(ProductContext)

    function menos() {
        const updateCartItem = cartItems.map((item) => item === data && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)
        setCartItems(updateCartItem)
    }
    function mais() {
        const updateCartItem = cartItems.map((item) => item === data ? { ...item, qty: item.qty + 1 } : item)
        setCartItems(updateCartItem)
    }

    return (
        <>
            <button onClick={menos}>-</button>
            <span>{data.qty}</span>
            <button onClick={mais}>+</button>
        </>
    )
}
export default AmountButton