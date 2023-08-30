import CartButton from "../Cart/CartButton/CartButton"
import Search from "../Search/Search"
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <Search />
            <CartButton />
            </header>
    )
}

export default Header