import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  height: 800px;
  padding-top: 180px;
  padding-bottom: 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    padding-top: 50px;
  }
`;

// Left Column

export const ColumnLeft = styled.div`
  display: grid;
  grid-template-columns: 285px 1fr;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 36px 1fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 12px 1fr;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  position: relative;
  min-height: 516px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 355px;
  }
`;

export const MarinBox = styled.div`
  height: 516px;
  background-color: ${({ theme }) => theme.pallete.background.blueMarin};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 355px;
  }
`;

export const GreenBox = styled.div`
  background-color: ${({ theme }) => theme.pallete.background.green};
  color: ${({ theme }) => theme.pallete.text.secondary};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 3rem 2rem;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

export const ImageTitle = styled.h5`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  font-family: "Ideal Sans Medium";

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
    font-style: italic;
  }
`;

export const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-family: "Ideal Sans Thin";
    text-decoration: none;
    color: ${({ theme }) => theme.pallete.text.secondary};
  }
`;

export const ImageParagraph = styled.p`
  font-size: 18px;
  line-height: 27px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
    font-style: italic;
  }
`;

// Rigth Column

export const ColumnRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 180px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 36px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 12px 1fr;
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 6rem 8rem;
  align-self: flex-end;
  background: rgba(239, 249, 253, 1);

  * {
    margin: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem 4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    order: 2;
    padding: 5rem 2rem;
  }
`;

export const MessageTitle = styled.h1`
  color: ${({ theme }) => theme.pallete.text.primary};
  font-size: 50px;
  font-family: "Ideal Sans Medium";

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 30px;
  }
`;

export const MessageHead = styled.p`
  color: rgba(227, 69, 194, 1);
  font-size: 22px;
  line-height: 33px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
    font-family: "Mercury G2";
    font-style: italic;
  }
`;

export const MessageContent = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-family: "Ideal Sans Light";

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

export const RedBox = styled.div`
  height: 60%;
  background-color: ${({ theme }) => theme.pallete.background.red};
  align-self: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    opacity: 0;
    order: 1;
  }
`;
