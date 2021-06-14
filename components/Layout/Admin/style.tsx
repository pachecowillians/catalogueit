import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-areas: "sidebar main";
`;

export const SideBarArea = styled.div`
    grid-area: sidebar;
`;

export const Content = styled.main`
    height: inherit;
    grid-area: main;
    width: 100%;
    background-color: #f2f3f5;
`;