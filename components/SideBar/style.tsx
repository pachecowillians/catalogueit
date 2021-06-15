import styled from 'styled-components'

export const Container = styled.div`
    width: 25vw;
    background-color: #282a36;
    height: 100vh;
    max-height: 100%;
    z-index: 98;
    transition: all ease 0.2s;

    @media(max-width:1100px){
        width: 30vw;
    }

    @media(max-width:900px){
        position: absolute;
        width: 40%;
        left: ${props => props.active ? `0%` : `-40%`};
    }

    @media(max-width:600px){
        width: 100%;
        left: ${props => props.active ? `0%` : `-100%`};
    }
`;

export const Toggle = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 99;
    padding: 5px;
    background-color: transparent;
    transition: all ease 0.3s;

    svg{
        padding-top: 3px;
        font-size: 3.5rem;
        color: #fff;
        color:  ${props => props.active ? `#fff` : `#282a36`};
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
    
    img{
        width: 100%;
        max-width: 150px;
        height: inherit;
        border-radius: 5px;
        padding: 50px 0px;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    color: #f8f8f2;
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