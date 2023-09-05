import styled from "styled-components"

export const GroupButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1.8px solid #1e1e1e;
border-radius: 5px 5px 5px 5px;
max-width: 107px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 22px;
    border: none;
    background: #1e1e1e;
    color: #ffffff;
    font-size: 18px;
}
span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 22px;
    color: #ffffff;
    font-size: 14px;
}

.button-esquerda{border-radius: 3px 0 0 3px;}
.button-direita{border-radius: 0 3px 3px 0;}
`