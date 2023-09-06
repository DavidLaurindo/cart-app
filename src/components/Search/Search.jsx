import { useState } from "react"
import fetchProducts from "../../api/fetchProducts"
import { GoSearch } from "react-icons/go";

//CONTEXT:
import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"
import { FormSearch } from "./search.styles"


function Search() {
    const [search, setSearch] = useState('')
    const { setProducts } = useContext(ProductContext)

    const handleSearch = async (event) => {
        event.preventDefault()
        //console.log("chamando api: "+ search)
        //console.log(event)

        const products = await fetchProducts(search)
        setProducts(products)
        setSearch('')
    }

    const mudandoTexto = (event) => {
        //debugger
        setSearch(event.target.value)
        //console.log("armazenando: ",event.target.value)
    }

    return (
        <FormSearch onSubmit={handleSearch}>
            <input type="text" name="pesquisa-item" value={search} placeholder="Search" onChange={mudandoTexto} required />
            <button type="submit"><GoSearch /></button>
        </FormSearch>
    )
}

export default Search