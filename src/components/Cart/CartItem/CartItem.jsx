import { useContext } from "react"
import ProductContext from "../../../contexts/ProductContext"

function CartItem( { data } ) {

    const { thumbnail, title, price, qty } = data
    const { cartItems, setCartItems } = useContext(ProductContext)

    function menos(){
        const updateCartItem = cartItems.map((item) => item === data && item.qty > 1 ? {...item, qty: item.qty - 1} : item)
        setCartItems(updateCartItem)
    }
    function mais(){
        const updateCartItem = cartItems.map((item) => item === data ? {...item, qty: item.qty + 1} : item)
        setCartItems(updateCartItem)
    } 
    
    function updatePrice(preco, quantidade){
        const unidadeValor = preco * quantidade
        return unidadeValor.toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL',
            }
        )
    }
    function normalPrice(){
        return price.toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL',
            }
        )
    }

    return (
        <section>
            <img src={thumbnail} alt="imagem do produto" />
            <div>
                <h3>{title}</h3>
                <h3>{qty === 1 ? normalPrice() : updatePrice(price, qty) }</h3>
                <p>{qty}</p>
            </div>

            <button onClick={menos}>-</button>
            <span>{qty}</span>
            <button onClick={mais}>+</button>
        </section>
    )
}

export default CartItem