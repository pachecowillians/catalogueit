import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    height: 400px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 30px 20px;
    transform: scale(0.9);
    transition: all ease 0.2s;

    img{
        width: 90%;
        border-radius: 5px;
    }

    span:nth-child(2){
        font-size: 2.5rem;
    }

    span:nth-child(3){
        font-size: 2.5rem;
        font-weight: bold;
    }

    &:hover{
        transform: scale(0.95);
    }
`;