import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  background-color: rgba(231, 110, 206, 1);
  outline: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
