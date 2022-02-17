import styled from 'styled-components';
import { ItemRarity } from 'enums';
import { ItemColors } from 'app-constants';

export const ItemContainer = styled.div<{ isLeftAligned: boolean }>`
    display: flex;
    justify-content: ${props => (props.isLeftAligned ? 'left' : 'right')};
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
export const ItemInformation = styled.div<{ isLeftAligned: boolean }>`
    display: flex;
    text-align: ${props => (props.isLeftAligned ? 'left' : 'right')};
    flex-direction: column;
    font-size: 12px;
    padding-top: 8px;
`;
