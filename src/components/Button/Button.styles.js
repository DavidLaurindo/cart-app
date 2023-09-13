import styled from "styled-components"

export const StyledButton = styled.button`
margin: 5px;
width: ${(props) => props.size === "large" ? "220px" : "100px"};
height: ${(props) => props.size === "large" ? "60px" : "35px"};
border-radius: ${(props) => props.size === "large" ? "10px" : "7px"};
border: none;
font-size: 16px;
background-color: ${(props) => props.variant === "primary" ? "#ea4c89" : "#48443F"};
color: #ffffff
`