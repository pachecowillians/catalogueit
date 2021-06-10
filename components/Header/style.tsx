import styled from 'styled-components'

export const FlexCentralized = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.header`
    width: 100vw;
    max-width: 100%;
    height: 70px;
    background-color: #282a36;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
`;

export const Logo = styled(FlexCentralized)`
    cursor: pointer;
    
    img{
        width: 50px;
        height: inherit;
        border-radius: 5px;
    }
`;

export const Search = styled(FlexCentralized)`
    width: 70%;
    height: auto;
    align-items: stretch;

    input{
        background-color: #f8f8f2;
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        width: 70%;
        border: none;
        outline: none;
        padding: 10px 15px;
    }

    button{
        background-color: #f8f8f2;
        border: none;
        font-size: 2rem;
        height: auto;
        width: 40px;
        cursor: pointer;
        outline: none;
    }
`;

export const CategorySearch = styled.div`
    width: 10%;
`;
