import { useContext } from "react"
import ProductContext from "../../../contexts/ProductContext"
import Button from "../../Button/Button";
import { StyledSection } from "./Total.styles";

export default function Total() {
    const { cartItems } = useContext(ProductContext)

    function updatePrice(preco, quantidade) {
        return preco * quantidade;
    }

    const totalCarrinho = cartItems.reduce((total, item) => total + updatePrice(item.price, item.qty), 0);

    return (
        <StyledSection>
            <table>
                <tbody>
                    <tr>
                        <td>Discount</td>
                        <td>
                            <button>+ Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>R$10.00</td>
                    </tr>
                    <tr>
                        <td><h2>Total Amount: </h2></td>
                        <td>
                            <p>{totalCarrinho.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                            })}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="buttons">
                <Button>Clear basket</Button>
                <Button variant="primary">Pay</Button>
            </div>
        </StyledSection>
    )
}