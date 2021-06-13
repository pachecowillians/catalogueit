import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #282a36;
    height: 100vh;
    max-height: 100%;
`;

export const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    
    img{
        width: 150px;
        height: inherit;
        border-radius: 5px;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    color: #f8f8f2;
    margin-top: 20px;

    div:nth-child(${props => props.selectedItem}){
        background-color: #50fa7b;
        color: #000;
    }
`;

export const Option = styled.div`
    padding: 15px 60px;
    cursor: pointer;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.75rem;

    svg{
        font-size: 2.5rem;
        margin-right: 10px;
    }
`;