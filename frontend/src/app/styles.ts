import styled from 'styled-components';

export const OutsideWrapper = styled.div`
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #101113;
    background-size: cover;
`;

export const MiddleWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

export const InnerContent = styled.div`
    width: 675px;
    max-width: 100vw;
    background-color: rgba(242, 242, 242, 1);
    margin: 0 auto;
    padding: 16px;
`;
