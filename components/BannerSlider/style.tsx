import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    height: auto;
    position: relative;
`;

export const VisibleItems = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

export const AllItems = styled.div`
    width: ${props => `${props.width}px`};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    left: ${props => `${props.left}px` || "0px"};
    transition: all ease 0.2s;
`;

export const Controller = styled.div`
    position: absolute;
    top: 50%;
    ${props => props.position}: 0px;
    background-color: #282a36;
    color: #fff;

    ${({ position }) => (position == 'left') ? `
        left:0px;
        transform: translate(50%, -50%);
    `: `
        right:0px;
        transform: translate(-50%, -50%);
    `}
    
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    svg{
        font-size: 3rem;
    }
`;