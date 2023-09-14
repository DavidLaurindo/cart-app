import styled from "styled-components"

export const StyledSection = styled.section`
background: linear-gradient(to top, #1C1A1E, #2E2C30);
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
    padding: 5px;
    color: #ffffff;
    font-size: 16px;
}
table{
    width: 100%;
    height: 100%;  
}
.button-components{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid black;
}
`