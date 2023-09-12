import styled from "styled-components"

export const StyledSection = styled.section`
position: fixed;
bottom: 0;
border-top: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;

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
    width: 460px;
}
.button-components{
    margin-top: 10px;
}
`