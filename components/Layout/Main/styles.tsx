import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 80px auto;
    grid-template-areas: "header" "main";

    @media(max-width:770px){
        grid-template-rows: 120px auto;
    }
`;

export const HeaderArea = styled.div`
    grid-area: "header";
`;

export const Content = styled.div`
    grid-area: "main";
    overflow-y: auto;
    width: 100vw;
    max-width: 100%;
    height: calc(100vh - 80px);
    background-color: #f2f3f5;

    @media(max-width:770px){
        height: calc(100vh - 120px);
    }
`;