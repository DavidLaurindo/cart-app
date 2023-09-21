import { useContext, useEffect, useState } from "react"
import fetchProducts from "../../api/fetchProducts"
import ProductCard from "../ProductCard/ProductCard"
import ProductContext from "../../contexts/ProductContext"
import { ContainerProducts } from "./products.styles"


function Products() {
    const { products, setProducts } = useContext(ProductContext)

    useEffect(() => {
        fetchProducts("iphone").then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <ContainerProducts>
            {
                products.slice(0,3).map((product) => <ProductCard 
                key={product.id} data={product}/>)
            }
        </ContainerProducts>
    )
}

export default Products