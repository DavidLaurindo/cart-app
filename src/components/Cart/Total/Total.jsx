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
                        <td>Total Amount: </td>
                        <td>
                            <h2>{totalCarrinho.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                            })}</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="button-components">
                <Button>Clear basket</Button>
                <Button variant="primary">Pay</Button>
            </div>
        </StyledSection>
    )
}
