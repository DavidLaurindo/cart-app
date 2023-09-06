import CartButton from "../Cart/CartButton/CartButton"
import Search from "../Search/Search"
import { StyledContainerHeader } from "./header.styles"

function Header() {
    return (
        <StyledContainerHeader>
            <Search />
            <CartButton />
        </StyledContainerHeader>
    )
}

export default Header