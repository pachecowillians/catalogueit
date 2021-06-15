import { Container } from './style'
import Link from 'next/link'

function AdminCard({ item }) {
    return (
        <Link href={`/item/${item.id}`}>
            <Container>
                <img src={item.img} alt="Product" />
                <span>{item.description}</span>
                <span>R$ {item.price}</span>
            </Container>
        </Link>
    );
}

export default AdminCard;