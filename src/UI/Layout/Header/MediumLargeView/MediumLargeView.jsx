import React from 'react';
import styled from 'styled-components';


// Components
import SiteLogo from 'UI/common/SiteLogo.jsx';
import MainMenu from '../Menus/MainMenu.jsx';
import ClassMenu from '../Menus/ClassMenu.jsx';

const MediumLargeView = () => {
    return (
        <MediumLargeViewStyled className='MediumLargeView'>
            <div className='inset'>
                <div className="logo">
                    <SiteLogo />
                </div>
                <div className='menus'>
                    <MainMenu />
                    <ClassMenu />
                </div>
            </div>
        </MediumLargeViewStyled>
    );
}

export default MediumLargeView;

const MediumLargeViewStyled = styled.div`
    .inset {
        display: flex;
        position: relative;

        .logo {
            flex: 1;

            .SiteLogo {

                margin: auto;
                padding: 20px 0px;
            }

        }

        .menus {
            flex: 4;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;

            h2 { display: none; }

            a {
                color: #a38d6d;
                font-weight: bold;
                text-decoration: none;
                text-transform: uppercase;
            }

            .MainMenu {
                padding: 20px 0px 0px 0px;
                display: flex;
                justify-content: flex-end;
                height: 55px;
                z-index: 50;

                a {
                    width: 90px;
                    text-align: center;
                    margin: 0px 0px 0px 10px;
                    padding-top: 8px;
                    font-size: 12px;
                    background-color: #26231b;
                    border: 2px solid #734e32;
                    border-bottom: none;
                    border-radius: 5px 5px 0px 0px;

                    &.active {
                        color: #f2c462;
                        background-color: #734e32;
                    }
                }
            }

            .ClassMenu {
                position: absolute;
                right: 10px;
                top: 10px;

                a {
                    font-size: 12px;
                }
            }
        }
    }
`;