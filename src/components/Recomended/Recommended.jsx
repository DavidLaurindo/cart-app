import { useContext, useEffect } from "react"
import { StyledSection } from "./recommended.styles"
import ProductContext from "../../contexts/ProductContext"
import ProductCard from "../ProductCard/ProductCard"
import fetchProducts from "../../api/fetchProducts"

function Recommended() {
    const { products, setProducts } = useContext(ProductContext)

    useEffect(() => {
        fetchProducts("sorvete").then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <StyledSection>
            <div className="title-section">
                <h2>Recommended</h2>
                <a href="">View All</a>
            </div>
            <div className="products-section">
                {
                    products.slice(0, 4).map((product) => <ProductCard key={product.id} data={product} />)
                }
            </div>
        </StyledSection>
    )
}
export default Recommended