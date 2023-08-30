import ProductContext from "../../contexts/ProductContext"
import { useContext } from "react"

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
        <section>
            <img src={thumbnail} alt="product" />
            <div>
                <h2>R$ {price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}</h2>
                <h2>{title}</h2>
            </div>
            <button type="button" onClick={handleAddCart} >add to cart</button>
        </section>
    )
}

export default ProductCard