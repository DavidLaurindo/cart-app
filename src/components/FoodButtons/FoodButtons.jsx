import { StyledDiv } from "./FoodButtons.styles";
import ButtonFood from "../ButtonFood/ButtonFood"


export default function FoodButtons() {
    return (
        <StyledDiv>
            <ButtonFood variant="trending">&#x1F525; Trending</ButtonFood>
            <ButtonFood>&#x1F355; Pizza</ButtonFood>
            <ButtonFood>&#x1F363; Sushi</ButtonFood>
            <ButtonFood>&#x1F35D; Pasta</ButtonFood>
            <ButtonFood>&#x1F950; Bakery</ButtonFood>
            <ButtonFood>&#x1F379; Drinks</ButtonFood>
        </StyledDiv>
    )
}