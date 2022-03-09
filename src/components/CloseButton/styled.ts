import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: 0;
  padding: 0.8rem 1rem;
  font-size: 24px;

  :before {
    content: '✕';
  }

  :hover {
    background-color: ${({ theme }) => theme.pallet.background.hover};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
