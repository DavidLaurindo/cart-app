import styled from "styled-components"

export const StyledButton = styled.button`
cursor: pointer;
margin-right: 10px;
background-color: ${(props) => props.variant === "trending" ? "#F9E3EB" : "white"};
color: ${(props) => props.variant === "trending" ? "#E52269" : ""};
border: none;
border-radius: 30px;
width: 130px;
height: 50px;
`
