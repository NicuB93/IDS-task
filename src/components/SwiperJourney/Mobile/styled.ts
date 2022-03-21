import styled from "styled-components";

export const MobileJourneyWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Years = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    )
    1;

  .bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.pink};
  }

  .years {
    font-family: "Ideal Sans Light";
    font-size: 16px;
    line-height: 24px;
  }
`;
