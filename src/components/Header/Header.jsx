import Search from "../Search/Search"
import { StyledContainerHeader } from "./header.styles"

function Header() {
    return (
        <StyledContainerHeader>
            <Search />
        </StyledContainerHeader>
    )
}

export default Header