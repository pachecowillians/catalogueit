import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(40, 42, 54,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
`;

export const Content = styled.div`
    width: 70%;
    height: 70%;
    background-color: #282a36;
    border-radius: 5px;
`;

export const Header = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;

    span{
        color: #f8f8f2;
        font-size: 2.5rem;
    }

    svg{
        font-size: 2.5rem;
        color: #ff5555;
        cursor: pointer;
        cursor: pointer;
    }
`;

export const Body = styled.div`
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "picture inputs" "picture button";
    align-content: center;
    justify-items: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 2rem;

    input, select, button{
            font-size: 2rem;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            outline: none;
            width: 100%;
            background-color: #fff;
            grid-area: inputs;
        }

        button{
            grid-area: button;
            height: 100%;
            background-color: #50fa7b;
            cursor: pointer;
            padding: 15px 0px;

            svg{
                font-size: 3rem;
            }
            
            &:hover{
                filter: brightness(0.95);
            }
        }

        select{
            outline: none;
            border: none;

        }
`;

export const EditImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    background-color: #6272a4;
    color: #f2f3f5;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    transition: all ease 0.2s;
    cursor: pointer;
    z-index: 999;
`;

export const Image = styled.div`
    grid-area: picture;
    position: relative;
    transition: all ease 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        user-select: none;
        cursor: pointer;
        transition: all ease 0.2s;
    }

    &:hover img{
        filter: brightness(0.9);
    }

    &:hover ${EditImage}{
        opacity: 1;
    }
`;


