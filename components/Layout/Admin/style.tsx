import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 25% auto;
    grid-template-areas: "sidebar" "main";
`;

export const SideBarArea = styled.div`
    grid-area: "sidebar";
    background-color: red;
`;

export const Content = styled.main`
    height: inherit;
    width: 100%;
    background-color: #f2f3f5;
`;