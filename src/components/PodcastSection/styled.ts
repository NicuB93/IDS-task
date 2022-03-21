import styled from "styled-components";

export const PodcastWrapper = styled.section`
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 12px;
  }
`;

export const PodcastContainer = styled.div`
  max-width: 1320px;
  padding: 80px 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 40px 60px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    padding: 40px 0;
  }
`;

export const PodcastContent = styled.p`
  width: 70%;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
`;
