import ProductContext from "../../contexts/ProductContext"
import { useContext } from "react"
import { StyledSection } from "./ProductCard.styles"

function ProductCard({ data }) {
    const { title, thumbnail, price, id } = data

    const { cartItems, setCartItems } = useContext(ProductContext)

    const handleAddCart = () => {

        //Verifica se existe o produto comparando o id
        const existingCartItem = cartItems.find(itemArray => itemArray.id === id);

        if (existingCartItem) {
            // Se o produto já existe no carrinho, incrementa a quantidade
            const updatedCartItems = cartItems.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Se o produto não existe no carrinho, adiciona como novo item
            setCartItems([...cartItems, { ...data, qty: 1 }]);
        }
    }

    return (
        <StyledSection>
            <div className="img-button-container">
                <button type="button" onClick={handleAddCart} >add to cart</button>
                <img src={thumbnail} alt="product" />
            </div>
            <div>
                <h4>{title}</h4>
                <h3>{price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}</h3>
            </div>
        </StyledSection>
    )
}

export default ProductCard