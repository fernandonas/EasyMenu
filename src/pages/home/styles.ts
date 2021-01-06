import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;    

`;

export const Logo = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: #fff;
    
`;


export const Message = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250;
    height: 50px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 7px;
    margin-top: 20px;
    padding: 30px;
`;