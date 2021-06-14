import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    max-width: 100%;
    height: 100%;
    background-color: #282a36;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "logo input category";
    align-items: center;
    justify-items: center;
    padding: 15px 30px;

    @media(max-width:770px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "logo category" "input input";
        grid-row-gap: 10px;
    }

    @media(max-width:350px){
        *{
            font-size: 1rem;
        }
    }
`;

export const Logo = styled.div`
    cursor: pointer;
    width: 100%;
    grid-area: logo;
    
    img{
        max-height: 30px;
        height: inherit;
        border-radius: 5px;
        padding-right: 20px;
    }
`;

export const Search = styled.div`
    width: 80%;
    height: auto;
    align-items: stretch;
    background-color: #f8f8f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 0px 10px;
    grid-area: input;

    input, button{
        border: none;
        outline: none;
        background-color: inherit;
    }

    input{
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        padding: 10px 15px;
    }

    button{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;

        *{
            font-size: 2rem;
        }
    }

    @media(max-width:770px){
        width: 100%;
    }

    @media(max-width:350px){
        input{
            font-size: 1.2rem;
        }
    }
`;

export const CategorySearch = styled.div`
    width: 100%;
    grid-area: category;
`;
