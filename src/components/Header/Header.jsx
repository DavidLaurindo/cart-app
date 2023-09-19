import Search from "../Search/Search"
import { StyledContainerHeader } from "./header.styles"
import { GrMenu } from "react-icons/gr"

function Header() {
    return (
        <StyledContainerHeader>
            <div className="menu-logo">
                <div className="logo">
                    <GrMenu />
                </div>
                <h1><a href="/">Delivery App</a></h1>
            </div>
            <div className="search-navbar">
                <Search />
            </div>
        </StyledContainerHeader>
    )
}

export default Header