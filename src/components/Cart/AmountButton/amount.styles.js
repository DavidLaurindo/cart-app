import styled from "styled-components"

export const GroupButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1.8px solid #312F33;
border-radius: 5px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    border: none;
    background: #312F33;
    color: #F2F2F2;
    font-size: 32px;
}
span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 32px;
    color: #F2F2F2;
    font-size: 18px;
}

.button-esquerda{border-radius: 3px 0 0 3px;}
.button-direita{border-radius: 0 3px 3px 0;}
`