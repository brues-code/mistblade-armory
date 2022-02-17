import styled from 'styled-components';

export const Input = styled.input`
    margin-right: 4px;
`;

export const Button = styled.button`
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
`;

export const CharImage = styled.img`
    height: 48px;
    width: 48px;
    padding: 4px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 8px;
    width: 100%;
`;

export const SheetWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SheetRow = styled.div`
    text-align: center;
    width: 100%;
`;

export const SheetBody = styled.div`
    display: flex;
    padding-bottom: 8px;
    width: 512px;
`;

export const SheetFooter = styled(SheetRow)`
    display: flex;
    justify-content: center;
`;

export const ProfessionIconContainer = styled.div`
    display: flex;
    font-size: 13px;
    font-weight: bold;
    flex-direction: column;
    width: 56px;
`;
