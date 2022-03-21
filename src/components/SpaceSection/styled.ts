import styled from "styled-components";

type CircleColor = {
  circleColor?: string;
};

export const SpaceWrapper = styled.section`
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 12px;
  }
`;

export const SpaceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: Helvetica;
  max-width: 1320px;
  min-height: 905px;
  margin: 0 auto;
  gap: 2rem;
  padding: 120px 105px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 696px;
    gap: 2rem;
    padding: 70px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    height: 100%;
    padding: 50px 0;
    grid-template-columns: 1fr;
  }
`;

export const SpaceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    order: 2;
  }

  button {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: max-content;
    padding-left: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.pink};
    font-family: "Ideal Sans Medium";
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;

export const Title = styled.h2`
  font-family: Helvetica;
  font-size: 50px;
  line-height: 60px;
`;

export const Content = styled.p`
  font-family: Helvetica;
  font-size: 18px;
  line-height: 27px;
`;

export const SpaceAnimation = styled.div<CircleColor>`
  width: 480px;
  height: 480px;
  transition: border 0.2s ease;
  border: 2px solid ${({ circleColor }) => circleColor};
  position: relative;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 290px;
    height: 290px;
    order: 1;
  }

  &:before {
    position: absolute;
    content: "";
    height: 680px;
    width: 100vw;
    right: 50%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.brightGray};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 768px;
      bottom: 0;
      right: 50%;
      top: 50%;
      left: 0;
      margin-left: -240px;
    }
  }
`;

export const RotatingCircle = styled.div<CircleColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  transition: background-color 0.2s ease;
  background-color: ${({ circleColor }) => circleColor};
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
  animation: circle 15s linear infinite;

  @keyframes circle {
    0% {
      transform: rotate(0deg) translate(-240px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(-240px) rotate(-360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    @keyframes circle {
      0% {
        transform: rotate(0deg) translate(-140px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translate(-140px) rotate(-360deg);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    @keyframes circle {
      0% {
        transform: rotate(0deg) translate(-145px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translate(-145px) rotate(-360deg);
      }
    }
  }
`;

export const InnerRotatingCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

export const CircleContent = styled.div<CircleColor>`
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: border 0.2s ease;
  border: 1px solid ${({ circleColor }) => circleColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 155px;
    height: 155px;
  }
`;
