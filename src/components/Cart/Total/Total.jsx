import { useContext } from "react"
import ProductContext from "../../../contexts/ProductContext"

export default function Total(){
    const { cartItems } = useContext(ProductContext)

    function updatePrice(preco, quantidade) {
        return preco * quantidade;
    }

    const totalCarrinho = cartItems.reduce((total, item) => total + updatePrice(item.price, item.qty), 0);

    return(
        <section>
            <h2>total do carrinho: </h2>
            <p>{totalCarrinho.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            })}</p>
        </section>
    )
}