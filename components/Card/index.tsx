import { Container } from './style'

function Card({ item }) {
    return (
        <Container>
            <img src={item.img} alt="Product" />
            <span>{item.description}</span>
            <span>R$ {item.price}</span>
        </Container>
    );
}

export default Card;