import Card from '../Card';
import { AllItems, Container, Controller, VisibleItems } from './style'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useEffect, useState } from 'react';

function Slider({ items }) {

    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);

    function moveLeft() {
        let newLeft = left + screen.width * 0.5;
        if (newLeft > 0) {
            newLeft = 0;
        }
        setLeft(newLeft);
    }

    function moveRight() {
        let newLeft = left - screen.width * 0.5;
        if (newLeft < -300 * items.length + screen.width - 60) {
            newLeft = -300 * items.length + screen.width - 60;
        }
        setLeft(newLeft);
    }

    useEffect(() => {
        setWidth(screen.width)
    });

    return (
        <Container>
            <VisibleItems>
                <AllItems left={left} width={items.length * width}>
                    {items.map(
                        (item, key) => (
                            <Card key={key} item={item} />
                        )
                    )}
                </AllItems>
            </VisibleItems>
            <Controller position={'left'}>
                <NavigateBeforeIcon
                    onClick={moveLeft}
                />
            </Controller>
            <Controller position={'right'}>
                <NavigateNextIcon
                    onClick={moveRight}
                />
            </Controller>
        </Container>
    );
}

export default Slider;