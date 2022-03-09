import styled from "styled-components";

export const AddSectionContainer = styled.section`
  display: flex;
  gap: 50px;
  padding: 100px 410px 120px 410px;

  button {
    background-color: ${({ theme }) => theme.pallete.background.orange};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 26px;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 35px;
    padding: 50px 100px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 20px;
    padding: 50px 12px;
  }
`;

export const AddSectionParagraph = styled.p`
  margin: 0;
  margin-top: 5px;
  font-family: "Ideal Sans Light";
  font-style: italic;
  font-size: 18px;
  line-height: 27px;
`;
