import { useState } from "react"
import ProductContext from "./ProductContext"

function Provider( { children }){
    const [products, setProducts] = useState([])

    const value={
        products,
        setProducts
    }

    return(
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>
    )
}

export default Provider