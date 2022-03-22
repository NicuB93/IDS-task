import styled from "styled-components";
import { Link, LinkProps } from "react-scroll";
import { fluidValue } from "../../utils/custom/fluidValue";

interface NavProps extends LinkProps {
  ismobileactive?: boolean;
}

type HeaderProps = {
  isPinned?: boolean;
  isMobileActive?: boolean;
};

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  transform: ${(props) =>
    props.isPinned ? `translate3d(0,0px,0)` : `translate3d(0,-150px,0)`};
  transition: transform 0.5s ease;
  z-index: 999;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  max-width: 1680px;
  padding: 21px 60px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 10px 36px;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;

    .button {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 5px 12px;
  }
`;

export const MobileNav = styled.header`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Nav = styled.nav<HeaderProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  row-gap: 20px;
  padding-right: 187px;
  column-gap: 120px;

  .button {
    display: none;
  }

  ${() => fluidValue("column-gap", 120, 20, 1680, 1024)};
  ${() => fluidValue("padding-right", 187, 40, 1680, 1024)};

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
    width: 100vw;
    height: 100vh;
    padding: 50px 36px;
    position: fixed;
    top: 73px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 999;
    overflow-y: scroll;

    opacity: ${(props) => (!props.isMobileActive ? 0 : 1)};
    visibility: ${(props) => (!props.isMobileActive ? "hidden" : "visible")};

    .button {
      display: block;
      margin-top: 50px;
      transition: opacity 1s ease;
      opacity: ${(props) => (!props.isMobileActive ? 0 : 1)};
      visibility: ${(props) => (!props.isMobileActive ? "hidden" : "visible")};
    }
  }
`;

export const SmoothLink = styled(Link)<NavProps>`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  transition: color 0.25s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    transition: opacity 1s ease;
    opacity: ${(props) => (!props.ismobileactive ? 0 : 1)};
    visibility: ${(props) => (!props.ismobileactive ? "hidden" : "visible")};
    font-size: 28px;
    padding: 20px 0;
    font-weight: 300;
    text-transform: capitalize;
    width: 100%;
    border-bottom: 1px solid rgba(231, 110, 206, 1);

    & :last-of-type {
      border-bottom: 0;
    }
  }

  &:hover {
    color: #e76ece;
  }
`;
