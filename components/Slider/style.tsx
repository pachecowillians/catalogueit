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
    width: 10000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    left: ${props => `${props.left}px` || "0px"};
    transition: all ease 0.2s;
`;