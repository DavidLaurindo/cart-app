import styled from "styled-components"

export const StyledSection = styled.section`
margin: 20px;
border-bottom: 1px solid #312F33;

.product-item{
    display: grid;
    grid-template-columns: 1fr 1.8fr 1fr;
}
.coluna-03{
    display: flex;
    justify-content: right;
}
.containerAmountButton{
    display: flex;
    justify-content: center;
    margin: 15px 0 40px 0;
}
img{
    border-radius: 10px;
    min-width: 100px;
    min-height: 60px;
    max-width: 200px;
    max-height: 160px;
    background-size: cover;
}
h3, h2{
    color: #F2F2F2;

    //Pesquisar Fonte correta:
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 17px;
}
`

