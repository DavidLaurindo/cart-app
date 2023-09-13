import { StyledButton } from './Button.styles'


function Button(props) {

    return (
        <StyledButton size={props.size} variant={props.variant}>
            {props.children}
        </StyledButton>
    )
}

export default Button