import styled from "styled-components";

type ButtonProps = {
  isActive: boolean;
};

export const AddSectionContainer = styled.section`
  max-width: 860px;
  display: flex;
  gap: 50px;
  margin: 0 auto;
  padding: 100px 0 120px 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 35px;
    padding: 50px 100px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 20px;
    padding: 50px 12px;
  }
`;

export const ShowButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.orange};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 35px;
    width: 34px;
    height: 34px;
  }

  .vertical {
    transition: transform 0.5s ease;
    transform: ${(props) =>
      props.isActive ? `translate(100%) rotate(90deg)` : ``};
  }
`;

export const AddSectionParagraph = styled.p`
  margin: 0;
  margin-top: 5px;
  font-family: "Ideal Sans";
  font-weight: 300;
  font-style: italic;
  font-size: 18px;
  line-height: 27px;
`;
