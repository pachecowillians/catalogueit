import { Body, Container, Fade, Info } from './style'

function Banner({ item }) {
    return (
        <Container>
            <Body img={item.banner}>
                {/* <img src={item.banner} alt="Product" /> */}
                <Fade>
                    <Info>
                        <span>{item.description}</span>
                        <span>R$ {item.price}</span>
                    </Info>
                </Fade>
            </Body>
        </Container>
    );
}

export default Banner;