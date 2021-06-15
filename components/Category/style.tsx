import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    margin: 10px 0px;
    border-radius: 5px;
    background-color: #44475a;
    color: #f8f8f2;

    &:hover{
        filter: brightness(0.9);
    }
`;

export const Name = styled.span`
    font-size: 2rem;
    user-select: none;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    width: 30%;

    button{
        border: none;
        cursor: pointer;
        background-color: inherit;
        border-radius: 5px;
        transition: all ease 0.2s;
    }

    button:first-child{
        color:#8be9fd;
    }

    button:nth-child(2){
        color:#ff5555;
    }

    button:hover{
        filter: opacity(0.8);
    }
`;