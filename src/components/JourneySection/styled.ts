import styled from "styled-components";

export const JournewWrapper = styled.section`
  background: ${({ theme }) => theme.colors.lightBlue}
    url("/assets/img/journeyBg.svg") 50%/100% 70% no-repeat;

  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 12px;
  }
`;

export const JourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  max-width: 1320px;
  margin: 0 auto;
  padding: 120px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 696px;
    gap: 2rem;
    padding: 70px 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    padding: 50px 0;
  }
`;

export const IDSKnowledge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 0 105px;

  @media (max-width: 1200px) {
    padding: 0;
    gap: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const columnLeft = styled.div`
  width: 70%;
  font-family: Helvetica;
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 28px;
    line-height: 36px;
  }
`;
export const columnRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightHead = styled.div`
  font-family: "Mercury G2";
  font-size: 22px;
  line-height: 33px;
  font-style: italic;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const RightParagraph = styled.p`
  font-family: Helvetica;
  font-size: 18px;
  line-height: 27px;
  font-weight: 300;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
