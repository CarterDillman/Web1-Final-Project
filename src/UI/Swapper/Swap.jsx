// Importing dependencies

import React from 'react';
import styled from 'styled-components';


// This is my component function
const Swap = () => {

    return(
        <SwapStyled>
            <img src='/assets/img/swapper/sunAndMoon/moon.png' />
        </SwapStyled>
    )

}

// Exporting my Component function
export default Swap;

const SwapStyled = styled.div`
    border: solid 15px purple;

`