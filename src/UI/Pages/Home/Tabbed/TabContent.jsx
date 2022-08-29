import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

const TabContent = ({ curTab }) => {
    return (
        <TabContentStyled className='TabContent'>
            <div className="left">
                <img src={ curTab.image } alt={ curTab.title } />
            </div>
            <div className="right">
                <h3>{ curTab.title }</h3>
                <div dangerouslySetInnerHTML={ {__html: curTab.text} } />
            </div>
        </TabContentStyled>
    );
}

export default TabContent;

const TabContentStyled = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    background-color: #26231b;
    border: 2px solid #734e32;
    border-radius: 0px 5px 5px 5px;

    @media ${ defaultMediaQueries.mdUp }{
        display: flex;
    }

    .left {
        flex: 1;
        img {
            width: 100%;
        }
    }

    .right {
        flex: 3;
        margin: 20px 0px 0px;

        @media ${ defaultMediaQueries.mdUp }{
            margin: 0px 0px 0px 20px;
        }

        h3{
            font-size: 30px;
            color: #dfcf99;
        }

        p{
            font-size: 18px;
            color: #a38d6d;
            margin-bottom: 20px;
            line-height: 1.25;
        }

        ul {
            margin: 0 0 10px 5px;
            padding: 5px 0;
            font-size: 18px;
            line-height: 1.25;
            list-style-type: none;
        }
    }

`;