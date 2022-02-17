import styled from 'styled-components';
import { ItemRarity } from 'enums';
import { ItemColors } from 'app-constants';

export const ItemContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: nowrap;
    font-size: 12px;
`;

export const ItemBackground = styled.div<{ itemRarity?: ItemRarity }>`
    display: flex;
    border-radius: 10%;
    padding: 4px;
    margin: 4px;
    ${({ itemRarity }) => itemRarity && `background-color: ${ItemColors[itemRarity]}`}
`;
export const ItemInformation = styled.div`
    display: flex;
    text-align: left;
    flex-direction: column;
    font-size: 12px;
    padding-top: 4px;
`;
