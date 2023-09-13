import { useContext } from "react"
import ProductContext from "../../../contexts/ProductContext"
import AmountButton from "../AmountButton/AmountButton"
import { StyledSection } from "./cartItem.styles"

function CartItem({ data }) {

    const { thumbnail, title, price, qty } = data

    function updatePrice(preco, quantidade) {
        const unidadeValor = preco * quantidade
        return unidadeValor.toLocaleString(
            'pt-br', {
            style: 'currency',
            currency: 'BRL',
        }
        )
    }
    function normalPrice() {
        return price.toLocaleString(
            'pt-br', {
            style: 'currency',
            currency: 'BRL',
        }
        )
    }

    return (
        <StyledSection>
            <div className="product-item">
                <div className="coluna-01">
                    <img src={thumbnail} alt="imagem do produto" />
                </div>
                <div className="coluna-02">
                    <h3>{title}</h3>
                </div>
                <div className="coluna-03">
                    <h3>
                        {qty === 1 ? normalPrice() : updatePrice(price, qty)}
                    </h3>
                </div>
            </div>
            <div className="containerAmountButton">
                <AmountButton data={data} />
            </div>
        </StyledSection>
    )
}

export default CartItem