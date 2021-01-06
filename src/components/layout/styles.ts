import styled from 'styled-components'

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #000;
    color: #fff;
`;

export const MenuItem = styled.div`
    width: 60px;
    background-color: orange;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px;
    height: 70px;
    background-color: gray;
    width: 100%;
`;