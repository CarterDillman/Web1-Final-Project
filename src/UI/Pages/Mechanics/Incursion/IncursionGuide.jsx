import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Mechanic from '../Mechanic.jsx';

const IncusionGuide = () => {
    return (
        <IncusionGuideStyled className='IncusionGuide'>
            <Mechanic title='How Incursion Works'>
                <p>
                    When a player encounters Alva, she will show a minimap of the current Incursion, the Temple Progress, and how many incursions are remaining. The golden outline around the room in the Temple indicates where the current Incursion is taking place.
                </p>
                <img src='/assets/img/incursion/IncursionUI.jpg' />
                <p>
                    The top right corner shows an in-depth map of the current Incursion. Each Red Dot indicates a door. Where each door leads to can be better understood by hovering the mouse over each red dot. This will tell you which room that door connects. When hovering over a door, the room that it attaches to will be shaded a lighter color on the Temple map.
                </p>
                <img src='/assets/img/incursion/IncursionRoom.jpg' />
                <p>
                    From here, the player will now need to decide which Architect to kill in order to change the outcome of the Temple to their liking. When hovered over the Architect, it will tell you more in-depth what each Architect outcome is.
                </p>
                <img src='/assets/img/incursion/IncursionArchitect.jpg' />
                <p>
                    Once inside the Incursion, the player will have an initial 10 seconds and gain more time as monsters are killed. While killing monsters and Architects, a Stone of Passage can randomly drop off one of the monsters. Stones of Passage are used to open doors within the Incursion.
                </p>
                <h3>General Rules of Thumb</h3>
                <ul>
                    <li>
                        Killing monsters increases your time in the Incursion. Damaging the Architect also increases time.
                    </li>
                    <li>
                        At least 1 Stone of Passage drops per Incursion. (<i>Exception is if there are no more doors to open from that room.</i>)
                    </li>
                    <li>
                        Upgrading a room is not always the best option.
                    </li>
                    <li>
                        Know which boss to kill before entering an Incursion.
                    </li>
                    <li>
                        Skipping Alva does not skip that Incursion. It will be the same Incursion the next time that you encounter Alva.
                    </li>
                    <li>
                        Map mods DO apply to Incursinos and can make them very difficult.
                    </li>
                </ul>
                <p>
                    Below you will find all of the temple rooms. Click on the room to see the Tier, Description, and any modifiers/rewards that room provides.
                </p>
            </Mechanic>
        </IncusionGuideStyled>
    );
}

export default IncusionGuide;

const IncusionGuideStyled = styled.div`
    img {
        max-width: 75%;
        display: block;
        margin: 0 auto;
    }
`;