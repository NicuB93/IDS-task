import styled from "styled-components";

export const AboutContainer = styled.section`
  height: 560px;
  padding-left: 285px;
  padding-right: 180px;
  background-color: ${({ theme }) => theme.pallete.background.gray};
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: ${({ theme }) => theme.pallete.text.secondary};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 500px;
    padding: 0 36px;
    grid-template-columns: 0.5fr 1.5fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    height: fit-content;
    padding: 50px 0;
    padding-left: 12px;

    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.pallete.background.gray} 50%, ${theme.pallete.background.white} 50%)`};
  }
`;

export const About = styled.div`
  background-color: ${({ theme }) => theme.pallete.background.blue};
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  max-height: 560px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 500px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 20px;
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
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
  background-color: ${({ theme }) => theme.pallete.background.blueMarin};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: fit-content;
  }
`;

export const AboutParagraph = styled.p`
  margin: 0;
  padding: 5rem 6rem;
  position: relative;
  font-family: "Helvetica";
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
