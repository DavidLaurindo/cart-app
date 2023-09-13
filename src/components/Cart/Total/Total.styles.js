import styled from "styled-components"

export const StyledSection = styled.section`
background-color: #2E2C30;
position: fixed;
bottom: 0;
border-top: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
width: 30%;


tr{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
td{
    margin: 10px;
}
table{
    border-bottom: 1px solid black;
    width: 100%;
    height: 100%;  
}
.button-components{
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
`