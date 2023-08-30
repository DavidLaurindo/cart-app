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
        console.log("chamando api: "+ search)

        const products = await fetchProducts(search)
        setProducts(products)
        setSearch('')
    }

    const mudandoTexto = (event) => {
        //debugger
        setSearch(event.target.value)
        console.log("armazenando: ",event.target.value)
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={search} placeholder="Buscar produtos" onChange={mudandoTexto} required />
            <button type="submit">Pesquisar</button>
        </form>
    )
}

export default Search