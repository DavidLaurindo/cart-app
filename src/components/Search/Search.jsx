import { useState } from "react"

function Search(){
const [search, setSearch] = useState('')

    return(
        <form>
            <input type="text" value={search} placeholder="Buscar produtos" onChange={({target}) => setSearch(target.value)} required/>
            <button type="submit">icone</button>
        </form>
    )
}

export default Search