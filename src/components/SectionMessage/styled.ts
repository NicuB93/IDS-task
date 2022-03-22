import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1320px;
  margin: 0 auto;
  min-height: 800px;
  padding: 180px 12px 0 105px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 308px 1fr;
    max-width: 696px;
    padding: 180px 0 0 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    padding-top: 50px;
    max-width: 100%;
  }
`;

// Left Column

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  position: relative;
  min-height: 516px;

  ::before {
    content: "";
    position: absolute;
    width: 500%;
    height: 100%;
    right: 100%;
    background-color: ${({ theme }) => theme.colors.blueMarin};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 355px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 768px;
  }
`;

export const GreenBox = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
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
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  font-family: "Ideal Sans";
  font-family: 500;

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
    font-family: "Ideal Sans";
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
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
  display: flex;
  justify-content: flex-end;

  ::after {
    content: "";
    align-self: flex-end;
    position: absolute;
    width: 50%;
    height: 50%;
    right: 0;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.red};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      opacity: 0;
    }
  }
`;

export const Message = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 6rem 8rem;
  align-self: flex-end;
  background: rgba(239, 249, 253, 1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem 4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    order: 2;
    padding: 50px 20px;
  }
`;

export const MessageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  font-family: "Ideal Sans";
  font-weight: 500;

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
  font-family: "Ideal Sans";
  font-weight: 300;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;
