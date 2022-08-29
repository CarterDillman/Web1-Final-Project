import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Mechanic from '../Mechanic.jsx';

const HeistTrinket = () => {
    return (
        <HeistTrinketStyled className='HeistTrinket'>
            <Mechanic title='Trinkets'>
                <p>
                    Trinkets greatly increase your profit from heists. You want to get one that can make a type of currency drop as a more valuable currency. This adds up over time. Another good mod is chance to drop more valuable uniques. Get the best trinket you can afford, preferably something that drops Divine Orbs. The ones that turn Regal Orbs into Divine Orbs cost a few Divines, while those that turn chaos into Divines start at 100 Divines. These keep their value however, and can easily be resold once you're done heisting. The less epxensive ones are unlikely to resell, but will more than pay off their cost.
                </p>
            </Mechanic>
        </HeistTrinketStyled>
    );
}

export default HeistTrinket;

const HeistTrinketStyled = styled.div`

`;