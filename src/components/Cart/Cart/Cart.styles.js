import styled from "styled-components"

export const Button = styled.button`
margin: 3px;
width: 140px;
height: 40px;
border-radius: 7px;
border: none;
font-size: 12px;
background-color: ${(props) => props.variant === "primary" ? "#ea4c89" : "#1e1e1e"};
color: #ffffff
`
export const Section = styled.section`
padding: 20px;
max-width: 370px;
background-color: #2F3038;
height: 100vh;
position: fixed;
top: 62px;
right: 0;
`

