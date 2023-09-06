import { StyledButton } from './Button.styles'


function Button(props) {

    return (
        <StyledButton variant={props.variant}>{props.children}</StyledButton>
    )
}

export default Button