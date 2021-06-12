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
    width:15vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    img{
        width: auto;
        max-height: 30px;
        height: inherit;
        border-radius: 5px;
    }
`;

export const Search = styled(FlexCentralized)`
    width: 70%;
    height: auto;
    align-items: stretch;
    width: auto;
    background-color: #f8f8f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 0px 10px;

    input, button{
        border: none;
        outline: none;
        background-color: inherit;
    }

    input{
        width: 40vw;
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        padding: 10px 15px;
    }

    button{
        width: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;

        *{
            font-size: 2rem;
        }
    }
`;

export const CategorySearch = styled.div`
    width: 15vw;
`;
