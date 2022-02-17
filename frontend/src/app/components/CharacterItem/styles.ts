import styled from "styled-components";
import { ItemRarity } from "enums";
import { ItemColors } from "app-constants";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ItemBackground = styled.div<{ itemRarity?: ItemRarity }>`
  padding: 4px 4px 0 4px;
  ${({ itemRarity }) =>
    itemRarity && `background-color: ${ItemColors[itemRarity]}`}
`;
