import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Mechanic from '../Mechanic.jsx';

const HeistTools = () => {
    return (
        <HeistToolsStyled className='HeistTools'>
            <Mechanic title='Rogue Gear'>
                <p>
                    Until your rogues are leveled up, take any gear you find and equip it on them. Alch if it is normal but do not waste currency.
                </p>
                <p>
                    Once fully leveled, you want the following items equipped. You can either buy them on trade or roll them yourself. If you decide to do it yourself, use the highlight items feature in your stash and search for the keyword provided for each item. When the item highlights, you can see the mod you want is present.
                </p>
                <p>
                    Since Huck can only have a max level of 3 in each job we don't bother equipping him.
                </p>
            </Mechanic>
        </HeistToolsStyled>
    );
}

export default HeistTools;

const HeistToolsStyled = styled.div`
    padding-top: 20px;
`;