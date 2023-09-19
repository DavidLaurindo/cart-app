import { StyledButton } from "./ButtonFood.styles";

export default function ButtonFood(props){
    return(
        <StyledButton variant={props.variant}>{props.children}</StyledButton>
    )
}