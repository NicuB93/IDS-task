import styled from "styled-components";

export const PeeWrapper = styled.section`
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 30px 0;
    padding: 20px 0;
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.colors.lightSkyBlue} 50%, ${theme.colors.white} 50%)`};
  }
`;

export const PeeContainer = styled.div`
  max-width: 1320px;
  height: 760px;
  margin: 0 auto;
  padding: 0 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    height: 576px;
    width: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightSkyBlue};
    z-index: -1;
    left: -305px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 492px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 542px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    position: unset;
    padding: 0;
    height: 100%;
  }
`;

export const PeeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 55%;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  padding: 100px;
  z-index: 1;
  left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px;
    max-width: 55%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 12px;
    position: unset;
    max-width: 100%;
  }
`;

export const PeeHead = styled.h1`
  font-family: Helvetica;
  font-size: 50px;
  line-height: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-family: "Ideal Sans Light";
    font-style: italic;
    font-size: 30px;
    line-height: 36px;
  }
`;

export const PeeDescription = styled.p`
  font-family: Helvetica;
  font-size: 20px;
  line-height: 27px;
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-family: "Ideal Sans Light";
    font-size: 16px;
    line-height: 24px;
  }
`;

export const PeeImage = styled.div`
  position: absolute;
  width: 895px;
  height: 760px;
  right: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 542px;
    height: 553px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: relative;
    width: 100%;
  }
`;
