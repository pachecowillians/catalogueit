import SideBar from "../../SideBar";
import { Container, Content, SideBarArea } from "./style";

function Admin({ children, route }) {
    
    function renderSideBar() {
        if (route != '/admin/login') {

            const itemIndex = [
                {
                    url: '/admin',
                    index: -1,
                },
                {
                    url: '/admin/profile',
                    index: 1,
                },
                {
                    url: '/admin/catalogue',
                    index: 2,
                },
                {
                    url: '/admin/categories',
                    index: 3,
                },
            ];

            const selectedItem = route;
            const selectedIndex = itemIndex.filter(item => item.url == selectedItem);

            return <SideBar selectedItem={selectedIndex[0].index} />
        }
    }

    return (
        <Container>
            <SideBarArea>
                {renderSideBar()}
            </SideBarArea>
            <Content>
                {children}
            </Content>
        </Container>
    );
}

export default Admin;