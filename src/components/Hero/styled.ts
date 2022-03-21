import styled from "styled-components";

export const HeroWrapper = styled.section`
  padding: 0 12px;
  padding-top: 105px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
    padding-top: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 12px;
  }
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1320px;
  margin: 0 auto;
  padding: 80px 0 120px 105px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 696px;
    gap: 2rem;
    padding: 70px 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    grid-template-columns: 1fr;
    padding: 50px 0;
  }
`;

export const ColumnLeft = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2rem;
  }
`;

export const HeadTitle = styled.h1`
  font-family: "Ideal Sans Medium";
  font-size: 70px;
  line-height: 75px;
  width: 60%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 45px;
    width: 70%;
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
