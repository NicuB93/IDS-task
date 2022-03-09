import styled from 'styled-components';
import { theme } from '../../assets/theme/theme';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  z-index: 1020;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  max-width: 1680px;
  padding: 10px 60px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  row-gap: 20px;
  padding-right: 187px;
  column-gap: 120px;
`;

export const Link = styled.a`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  transition: color 0.25s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #e76ece;
  }
`;
