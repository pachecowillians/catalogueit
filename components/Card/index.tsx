import { Container } from './style'

function Card() {
    return (
        <Container>
            <img src="https://picsum.photos/200" alt="Product" />
            <span>Product description</span>
            <span>R$ 50,00</span>
        </Container>
    );
}

export default Card;