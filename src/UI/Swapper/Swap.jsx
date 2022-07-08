// Importing dependencies

import React, { useState } from 'react';
import styled from 'styled-components';


// This is my component function
const Swap = () => {

    const [imgSrc, imgSrcUpdate] = useState('/assets/img/swapper/sunAndMoon/moon.png')

    const changeToImage1 = () => {
        console.log('change to image 1');
        imgSrcUpdate('/assets/img/swapper/sunAndMoon/moon.png')
    }

    const changeToImage2 = () => {
        console.log('change to image 2');
        imgSrcUpdate('/assets/img/swapper/sunAndMoon/sun.png')
    }

    return(
        <SwapStyled>
            <h3>Sun and Moon</h3>
            <div>
                <img
                    src={ imgSrc }
                    alt='The Moon'
                    onMouseOver={ changeToImage1 }
                    onMouseOut={ changeToImage2 }
                />
                <h4>The Moon</h4>
            </div>
        </SwapStyled>
    )

}

// Exporting my Component function
export default Swap;

const SwapStyled = styled.div`
    background-color: powderblue;
    padding: 20px;

    h3 {
        font-size: 40px;
        color: teal;
    }

    h4 {
        font-size: 18px;
        color: teal;
    }

    img {
        border: solid 10px teal;
    }
`