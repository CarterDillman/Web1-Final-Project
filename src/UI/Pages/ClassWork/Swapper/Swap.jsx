// Importing dependencies

import React, { useState } from 'react';
import styled from 'styled-components';


// This is my component function
const Swap = ({ swapData }) => {

    const [imgSrc, imgSrcUpdate] = useState(swapData.image1.path);
    const [textState, textStateUpdate] = useState(swapData.image1.title);

    const changeToImage1 = () => {
        console.log('change to image 1');
        imgSrcUpdate(swapData.image2.path);
        textStateUpdate(swapData.image2.title);
    }

    const changeToImage2 = () => {
        console.log('change to image 2');
        imgSrcUpdate(swapData.image1.path);
        textStateUpdate(swapData.image1.title);
    }

    return(
        <SwapStyled>
            <h3>{ swapData.title }</h3>
            <div>
                <img
                    src={ imgSrc }
                    alt={ textState }
                    onMouseOver={ changeToImage1 }
                    onMouseOut={ changeToImage2 }
                />
                <h4>{ textState }</h4>
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