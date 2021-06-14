import styled from 'styled-components'

export const Container = styled.div`
    display: ${props => props.active ? `inherit` : `none`};
    width: 100%;
    background-color: #282a36;
    height: 100vh;
    max-height: 100%;
    z-index: 98;

    @media(min-width:900px){
        display: inherit;
    }

    @media(max-width:900px){
        padding-top: 40px;
    }

    @media(max-width:600px){
        position: absolute;
    }
`;

export const Toggle = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    z-index: 99;
    border-radius: 5px;
    padding: 5px;
    background-color: #282a36;

    svg{
        padding-top: 3px;
        font-size: 3rem;
        color: #fff;
    }

    @media(min-width:900px){
        display: none;
    }
`;

export const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    
    img{
        width: 100%;
        max-width: 150px;
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

    @media(max-width:1000px){
        padding: 15px 30px;
    }
`;