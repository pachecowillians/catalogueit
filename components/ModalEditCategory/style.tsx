import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(40, 42, 54,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 50%;
    height: 50%;
    background-color: #282a36;
    border-radius: 5px;
`;

export const Header = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;

    span{
        color: #f8f8f2;
        font-size: 2.5rem;
    }

    svg{
        font-size: 2.5rem;
        color: #ff5555;
        cursor: pointer;
    }
`;

export const Body = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    
    input{
        font-size: 2rem;
        padding: 10px 15px;
        width: 70%;
        margin-right: 10px;
        border-radius: 5px;
    }

    button{
        padding: 0px 15px;
        background-color: #50fa7b;
        border-radius: 5px;

        svg{
            font-size: 2rem;
        }
    }

    input, button{
        outline: none;
        border: none;
    }
`;