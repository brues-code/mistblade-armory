import styled from "styled-components";

export const Input = styled.input`
  margin-right: 4px;
`;

export const Button = styled.button``;

export const CharImage = styled.img`
  height: 48px;
  width: 48px;

  padding: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 8px;
`;

export const SheetWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SheetRow = styled.div`
  width: 100%;
  text-align: center;
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
