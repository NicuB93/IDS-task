import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.pink};
  outline: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;
