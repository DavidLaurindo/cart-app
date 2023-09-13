import styled from "styled-components"

export const StyledButton = styled.button`
margin: 5px;
width: 220px;
height: 60px;
border-radius: 10px;
border: none;
font-size: 12px;
background-color: ${(props) => props.variant === "primary" ? "#ea4c89" : "#1e1e1e"};
color: #ffffff
`