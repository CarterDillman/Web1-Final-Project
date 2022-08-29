import React from 'react';
import styled from 'styled-components';

const TrinketTable = () => {
    return (
        <TrinketTableStyled className='TrinketTable'>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>Thief's Trinket Mods</th>
                    </tr>
                    <tr>
                        <th>Additional Items</th>
                        <td colSpan={3}>
                            X% chance to recieve additional Y items when opening a Reward Chest in a Heist<br/>
                            More chance to get additional items, such as Unique items, Weapons, Essences, Armour items, Blight items, Breach items, Divination Cards, etc...
                        </td>
                    </tr>
                    <tr>
                        <th>X currency drop as Y currency</th>
                        <td colSpan={3}>
                            N% chance in Heist for X to drop as Y instead.
                        </td>
                    </tr>
                    <tr>
                        <th>X% increased Rarity of Items dropped</th>
                        <td colSpan={3}>
                            X% chance increased Rarity of items dropped in a Heist.
                        </td>
                    </tr>
                    <tr>
                        <th>Best Mods</th>
                        <td colSpan={3}>X% chance in Heists for Regal Orbs to drop as Divine Orbs instead<br/>
                        X% chance in Heists for Chaos Orbs to drop as Divine Orbs instead
                        </td>
                    </tr>
                    <tr>
                        <th>Other Mods</th>
                        <td className='splitCol'>
                            X% chance in Heist for items to drop identified<br/>
                            X% chance in Heist for items to drop corrupted<br/>
                            X% increased Quanity of items dropped in Heist
                        </td>
                        <td className='splitCol'>
                            Heist Chests have a X% chance to contain more valuable Unique items<br/>
                            Smuggler's Cache's have X% chance to duplicate contained Rogue's Markers<br/>
                            X% chance in Heist for items to drop with an additional socket
                        </td>
                    </tr>
                </tbody>
            </table>
        </TrinketTableStyled>
    );
}

export default TrinketTable;

const TrinketTableStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 50px 20px 50px;
    table {
        th {
            background-color: #332f24;
            color: #dfcf99;
        }
        tr {
            :last-child {
                td{
                    border-bottom: 0;
                }
            }
        }
        td {
            color: #8888ff;
        }
        th, td {
            margin: 0;
            padding: 10px;
            border-bottom: 1px solid #1a1812;
            border-right: 1px solid #1a1812;
            line-height: 1.25;
            :last-child {
                border-right: 0;
            }
        }
    }

`;