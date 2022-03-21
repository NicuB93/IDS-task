import styled from "styled-components";

export const SwiperWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 115px;
  }

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      gap: 1rem;
    }
  }
`;

export const IconTitle = styled.h5``;

export const IconDiv = styled.div`
  width: 80px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
  }
`;
