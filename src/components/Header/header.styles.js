import styled from "styled-components"

export const StyledContainerHeader = styled.header`
background-color: #FBF9FA;
display: flex;
justify-content: space-between;
align-items: center;
width: 70%;
height: 80px;
padding: 10px;
position: fixed;
top: 0;
left: 0;
border-bottom: 1px solid #EDE0E2;

a{
    color: black; 
    text-decoration: none;

}
.menu-logo{
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo{
    font-size: 30px;
    margin: 20px;
    margin-top: 28px;
}
.search-navbar{
    margin-right: 30px;
}
`