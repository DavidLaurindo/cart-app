import styled from "styled-components"

export const FormSearch = styled.form`
border: 1px solid #E6E6E6;
border-radius: 100px;
width: 250px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;


input{
    height: 20px;
    width: 210px;
    border: none;
    outline: 0;
    padding-left: 10px;
    background-color: transparent;
    font-size: 16px;
}
::placeholder{
    font-size: 15px;
}
button{
    background-color: transparent;
    border: none;
    font-size: 13px;
    margin-bottom: 1px;
    color: #6E6E6E;
    display: flex;
    cursor: pointer;
}
`