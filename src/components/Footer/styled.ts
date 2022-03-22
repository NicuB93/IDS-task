import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 12px;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1320px;
  padding: 80px 100px;
  margin: 0 auto;
  display: flex;
  gap: 5rem;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 80px 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 80px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  button {
    width: max-content;
    background-color: transparent;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 0;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Head = styled.h2`
  font-family: "Ideal Sans";
  font-size: 28px;
  line-height: 42px;
`;

export const Content = styled.p`
  font-family: "Ideal Sans";
  font-weight: 100;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: 1.13px;
`;

export const Copyright = styled.p`
  font-family: "Ideal Sans";
  font-weight: 100;
  font-size: 18px;
  line-height: 27px;
`;
