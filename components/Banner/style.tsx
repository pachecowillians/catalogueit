import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
`;

export const Body = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`;

export const Fade = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const Info = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);

    span{
        color: #f8f8f2;
    }

    span:first-child{
        font-weight: bold;
        padding-bottom: 10px;
        font-size: 3rem;
    }

    span:nth-child(2){
        font-size: 2.5rem;
    }
`;