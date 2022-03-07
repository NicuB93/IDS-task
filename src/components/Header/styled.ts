import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 1000px;
  padding: 36px 180px;
  padding-bottom: 120px;
  gap: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2rem;
    padding: 4rem 36px;
    padding-bottom: 120px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    padding: 36px 12px;
  }
`;

export const ColumnLeft = styled.div`
  justify-self: center;
  align-self: center;
  padding-left: 105px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0;
  }
`;

export const HeadTitle = styled.h1`
  font-family: "Ideal Sans Light";
  font-size: 70px;
  line-height: 75px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 45px;
  }
`;

export const HeadDescription = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: rgba(231, 110, 206, 1);
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const HeadMotto = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-style: italic;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const ColumnRight = styled.div`
  justify-self: flex-end;
  width: 100%;
  max-width: 574px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-self: center;
    max-width: 1000px;
  }
`;

export const ImageDiv = styled.div`
  position: relative;
`;
