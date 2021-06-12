import Banner from '../Banner';
import { AllItems, Container, Controller, VisibleItems } from './style'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useEffect, useState } from 'react';

function BannerSlider({ items }) {

    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);

    function moveLeft() {
        let newLeft = left + width;
        if (newLeft > 0) {
            newLeft = 0;
        }
        setLeft(newLeft);
    }

    function moveRight() {
        let newLeft = left - width;
        if (newLeft < -width * items.length + screen.width) {
            newLeft = -width * items.length + screen.width;
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
                            <Banner key={key} item={item} />
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

export default BannerSlider;