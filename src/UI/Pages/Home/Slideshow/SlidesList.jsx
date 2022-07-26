import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


/* Scripts ---------------------------*/
import { slidesData } from 'UI/common/data/slidesData.js';

/* Component -------------------------*/
import Slide from './Slide.jsx';

const SlidesList = () => {
    return (
        <SlidesListStyled className='SlidesList'>
            <Carousel
                autoPlay={ true }
                infiniteLoop={ true }
                showThumbs={ false }
            >
                {
                    slidesData.map((slide, idx) => {
                        return <Slide key={ idx } slide={ slide } />
                    })
                }
            </Carousel>
        </SlidesListStyled>
    );
}

export default SlidesList;

const SlidesListStyled = styled.div`
    .carousel .slide .legend {
        background-color: #f26422;
    }
`;