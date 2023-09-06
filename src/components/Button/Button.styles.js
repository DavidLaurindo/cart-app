import styled from "styled-components"

export const StyledButton = styled.button`
margin: 3px;
width: 140px;
height: 40px;
border-radius: 7px;
border: none;
font-size: 12px;
background-color: ${(props) => props.variant === "primary" ? "#ea4c89" : "#1e1e1e"};
color: #ffffff
`