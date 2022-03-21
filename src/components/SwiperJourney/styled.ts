import styled from "styled-components";

export const SwiperWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }

  .swiper-slide {
    display: grid;
    grid-template-columns: 440px 1fr;
    gap: 3rem;
    padding-left: 105px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      padding: 0;
    }
  }

  .swiper-pagination {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    top: 0;
    right: 100px;
    position: relative;
    padding-top: 85px;
    padding-bottom: 115px;

    & :after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      top: 90px;
      z-index: -1;
      animation: borderPulse 1.25s infinite;

      @keyframes borderPulse {
        0% {
          background: ${({ theme }) =>
            `linear-gradient(to right, transparent, ${theme.colors.pink} 20%)`};
        }
        100% {
          background: ${({ theme }) =>
            `linear-gradient(to right, transparent, ${theme.colors.pink} 100%)`};
        }
      }
    }

    .bullet {
      position: relative;
      color: white;
      top: 25px;
      font-family: "Ideal Sans Light";
      font-style: italic;
      font-size: 18px;

      & :before {
        content: "";
        width: 12px;
        height: 12px;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        position: absolute;
        top: -25px;
        opacity: 0;
      }

      &:after {
        content: "";
        width: 12px;
        height: 12px;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        position: absolute;
        top: -25px;
        left: 40px;
      }
    }

    .bullet-active {
      &:after {
        content: "";
        background: ${({ theme }) => theme.colors.pink};
      }
      &:before {
        background: ${({ theme }) => theme.colors.pink};
        width: 32px;
        height: 32px;
        top: -35px;
        left: 30px;
        opacity: 1;
        animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;

        @keyframes pulse-ring {
          0% {
            transform: scale(0.5);
          }
          80%,
          100% {
            opacity: 0;
          }
        }
      }
    }
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const SlideTitle = styled.h3`
  font-family: "Mercury G2";
  font-size: 32px;
  line-height: 40px;
  font-style: italic;
  font-weight: 400;
`;

export const ShortDescription = styled.h5`
  font-family: "Ideal Sans Light";
  font-size: 24px;
  line-height: 28px;
  font-style: italic;
`;

export const ParagraphContainer = styled.div``;

export const ParagraphTitle = styled.h6`
  font-family: "Ideal Sans Medium";
  font-size: 18px;
  line-height: 27px;
`;

export const Paragraph = styled.p`
  font-family: Helvetica;
  font-size: 18px;
  line-height: 27px;
  font-weight: 300;
`;

export const ColumnRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  width: 540px;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 265px;
    height: 310px;
  }

  &:after {
    position: absolute;
    top: 90px;
    content: "";
    width: 100%;
    height: 100%;
    background: url("/assets/img/slideImgOverflow.svg") 50%/100% 70% no-repeat;
  }
`;

export const FloatingImg = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 85%;
  top: 8%;
  z-index: 999;

  @media (max-width: 1200px) {
    top: 25%;
    width: 100%;
    height: 50%;
  }

  .window {
    width: 100%;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    z-index: 9999;
    display: flex;
    gap: 7px;
    justify-content: flex-start;
    align-items: center;

    div {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .red {
      background-color: ${({ theme }) => theme.colors.redClose};
      margin-left: 7px;
    }

    .yellow {
      background-color: ${({ theme }) => theme.colors.yellowMin};
    }

    .green {
      background-color: ${({ theme }) => theme.colors.greenMax};
    }
  }

  .float-img {
    position: absolute;
    width: 120%;
    height: 120%;
    animation: floater 8s infinite;
    transition: ease 0.5s;
    z-index: -1;

    @keyframes floater {
      0% {
        transform: translateY(-20%);
        transition: ease 0.5s;
      }
      50% {
        transform: translateY(-5%);
        transition: ease 0.5s;
      }
      100% {
        transform: translateY(-20%);
        transition: ease 0.5s;
      }
    }
  }
`;
