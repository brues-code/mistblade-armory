import styled from 'styled-components';
import { Class } from '../../../enums';
import { getBlizzBGUrl } from '../../../util/get-static-image-url';

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

export const SheetWrapper = styled.div<{ classId?: Class }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${props =>
        props.classId &&
        `background-position: center; background-repeat: no-repeat; background-image: url(${getBlizzBGUrl(
            props.classId - 1
        )}`} );
`;

export const SheetRow = styled.div`
    text-align: center;
    width: 100%;
`;

export const SheetBody = styled.div`
    display: flex;
    padding-bottom: 8px;
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
