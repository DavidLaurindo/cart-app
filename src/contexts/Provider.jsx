import { useState } from "react"
import ProductContext from "./ProductContext"

function Provider( { children }){
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    const value={
        products,
        setProducts,
        cartItems,
        setCartItems
    }

    return(
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>
    )
}

export default Provider