import { useContext, useEffect, useState } from "react"
import fetchProducts from "../../api/fetchProducts"
import './Products.css'
import ProductCard from "../ProductCard/ProductCard"
import ProductContext from "../../contexts/ProductContext"


function Products() {
    const { products, setProducts } = useContext(ProductContext)

    useEffect(() => {
        fetchProducts("iphone").then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <section>
            {
                products.map((product) => <ProductCard 
                key={product.id} data={product}/>)
            }
        </section>
    )
}

export default Products