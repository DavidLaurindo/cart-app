import { useState } from "react"
import fetchProducts from "../../api/fetchProducts"

//CONTEXT:
import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"


function Search() {
    const [search, setSearch] = useState('')
    const { setProducts } = useContext(ProductContext)

    const handleSearch = async (event) => {
        event.preventDefault()

        const products = await fetchProducts(search)
        setProducts(products)
        setSearch('')
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={search} placeholder="Buscar produtos" onChange={({ target }) => setSearch(target.value)} required />
            <button type="submit">icone</button>
        </form>
    )
}

export default Search