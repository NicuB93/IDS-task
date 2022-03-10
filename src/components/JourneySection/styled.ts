import JourneyBackground from "../SVGs/Journey/journey.svg";
import styled from "styled-components";

export const JourneyContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.pallete.background.lightBlue};
  font-family: Helvetica;
  background-image: url("${JourneyBackground}");
  background-size: cover;

  height: 1000px;
`;
