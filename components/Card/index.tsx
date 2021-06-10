import { useRouter } from 'next/router';
import { Container } from './style'

function Card({ item }) {

    const router = useRouter();

    function handleOnClick() {
        router.push(`/item/${item.id}`);
    }

    return (
        <Container onClick={handleOnClick}>
            <img src={item.img} alt="Product" />
            <span>{item.description}</span>
            <span>R$ {item.price}</span>
        </Container>
    );
}

export default Card;