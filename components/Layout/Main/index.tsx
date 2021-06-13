import Header from '../../Header';
import { Container, HeaderArea, Content } from './styles'

function Main({ children }) {
    return (
        <Container>
            <HeaderArea>
                <Header />
            </HeaderArea>
            <Content>
                {children}
                {/* footer */}
            </Content>
        </Container>
    );
}

export default Main;