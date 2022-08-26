import React from 'react';
import styled from 'styled-components';

const TabMenuItem = ({curTab, curTabUpdate, item}) => {

    const onClick = () => {
        curTabUpdate(item);
    }

    const theClassName = (curTab.title === item.title) ? 'TabMenuItem selected' : 'TabMenuItem';

    return (
        <TabMenuItemStyled className={ theClassName } onClick={ onClick}>
            { item.title }
        </TabMenuItemStyled>
    );
}

export default TabMenuItem;

const TabMenuItemStyled = styled.div`
    background-color: #0f0f0f;
    width: 150px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;

    &.selected {
        background-color: #734e32;
        color: #f2c462;
    }
`;