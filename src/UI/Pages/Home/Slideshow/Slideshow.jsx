import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import SlidesList from './SlidesList.jsx';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            <SlidesList />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

`;