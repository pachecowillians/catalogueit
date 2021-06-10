import Card from '../Card';
import { AllItems, Container, VisibleItems } from './style'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useState } from 'react';

function Slider({ items }) {

    const [left, setLeft] = useState(0);

    function moveLeft() {
        let newLeft = left + screen.width * 0.5;
        if (newLeft > 0) {
            newLeft = 0;
        }
        setLeft(newLeft);
    }

    function moveRight() {
        let newLeft = left - screen.width * 0.5;
        if (newLeft < -300 * items.length + screen.width) {
            newLeft = -300 * items.length + screen.width;
        }
        setLeft(newLeft);
    }

    return (
        <Container>
            <VisibleItems>
                <AllItems left={left}>
                    {items.map(
                        (item, key) => (
                            <Card key={key} item={item} />
                        )
                    )}
                </AllItems>
            </VisibleItems>
            <NavigateBeforeIcon
                style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    background: "#6272a4",
                    color: "#fff",
                    borderRadius: "50%",
                    fontSize: "3rem",
                    cursor: "pointer"
                }}
                onClick={moveLeft}
            />
            <NavigateNextIcon
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    background: "#6272a4",
                    color: "#fff",
                    borderRadius: "50%",
                    fontSize: "3rem",
                    cursor: "pointer",
                }}
                onClick={moveRight}
            />
        </Container>
    );
}

export default Slider;