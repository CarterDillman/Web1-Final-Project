import React from 'react';
import styled from 'styled-components';

const ToolTable = () => {

    return (
        <ToolTableStyled className='ToolTable'>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Tool</th>
                        <th>Brooch</th>
                        <th>Cloak</th>
                        <th>Gear</th>
                    </tr>
                    <tr>
                        <th>Prefix</th>
                        <td>Job Speed (81)</td>
                        <td>Quantity (84)</td>
                        <td>Lockdown Time (81)</td>
                        <td>Job Speed (81)</td>
                    </tr>
                    <tr>
                        <th>Suffix</th>
                        <td>Reduced Fee (81)</td>
                        <td>Chance for Duplicate (83)</td>
                        <td>Reduced Alert from Chests (82)</td>
                        <td>Reduced Fee (81)</td>
                    </tr>
                </tbody>
            </table>
        </ToolTableStyled>
    );
}

export default ToolTable;

const ToolTableStyled = styled.div`
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