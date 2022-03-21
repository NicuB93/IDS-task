import styled from "styled-components";

export const AboutWrapper = styled.section`
  background: ${({ theme }) => theme.colors.gray};
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 12px;

    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.colors.gray} 50%, ${theme.colors.white} 50%)`};
  }
`;

export const AboutContainer = styled.div`
  margin: 0 auto;
  height: 560px;
  max-width: 1320px;
  padding-left: 105px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 696px;
    height: 500px;
    padding: 0;
    grid-template-columns: 308px 1fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 100%;
    height: fit-content;
  }
`;

export const About = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  max-height: 560px;
  gap: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 500px;
    padding: 0 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 20px;
  }
`;

export const AboutHead = styled.h6`
  font-family: "Ideal Sans Light";
  font-size: 16px;
  line-height: 24px;
  padding-top: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
  }
`;

export const AboutTitle = styled.h3`
  font-family: "Ideal Sans Light";
  font-size: 32px;
  line-height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
  }
`;

export const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutImg = styled.div`
  position: relative;
  height: 280px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 205px;
  }
`;

export const AboutParagraphContainer = styled.div`
  min-height: 360px;
  background-color: ${({ theme }) => theme.colors.blueMarin};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: fit-content;
  }
`;

export const AboutParagraph = styled.p`
  margin: 0;
  padding: 5rem 6rem;
  position: relative;
  font-family: Helvetica;
  font-weight: 100;
  font-size: 18px;
  line-height: 27px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 50px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 20px;
    font-size: 16px;
    line-height: 24px;
  }
`;
