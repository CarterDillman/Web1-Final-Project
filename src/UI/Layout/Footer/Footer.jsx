import React from 'react';
import styled from 'styled-components';

// Components
import SiteLogo from 'UI/common/SiteLogo.jsx';

// Scripts
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            <h2>Notice of Non-Affiliation</h2>
            <p className='Notice'>This site is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Grinding Gear Games, or any of its subsidiaries or its affiliates. The official Path of Exile website can be found at <a href="https://www.pathofexile.com">https://www.pathofexile.com</a></p>
            <p className='Notice'>The names Grinding Gear Games and Path of Exile as well as related names, marks, emblems and images are registered trademarks of their respective owners. The use of any trade name or trademark is for clarifying purposes only and does not imply any association with the trademark holder of their product brand.</p>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`

    padding: 20px 0px;
    margin: 50px 0px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
    }

    .SiteLogo {
        width: 150px;
        margin-bottom: 10px;
        @media ${defaultMediaQueries.mdUp} {
            width: 300px;
        }
    }

    h2 {
        margin: 5px 0px;
        font-size: 18px;
    }

    .Notice {
        font-size: 14px;
    }
`;