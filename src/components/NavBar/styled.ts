import styled from "styled-components";

export const NavContainer = styled.div`
  border-bottom: 1px solid rgba(240, 240, 240, 1);
  padding: 1.5rem 2.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 1.5rem;
  }
`;

export const NavContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    button {
      padding-right: 0;
    }
  }
`;

export const NavList = styled.ul`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
  width: 60%;
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: black;
  }
`;
