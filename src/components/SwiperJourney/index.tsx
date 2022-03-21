import { FC } from "react";
import { Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { JourneyIcon1 } from "@components/SVGs/JourneyIcons";
import { RightArrow } from "@components/SVGs/Arrows";

import * as S from "./styled";
import { Button } from "@components/Button";
import Image from "next/image";

type SwiperCustomProps = {
  data: {
    slideTitle: string;
    shortDescription: string;
    paragraphTitle: string;
    paragraphContent: string;
    years: string;
    staticImgPath: string;
    floatImgPath: string;
  }[];
};

export const SwiperSlider: FC<SwiperCustomProps> = ({ data }) => {
  const years = data.map((e) => e.years);

  const params: SwiperProps = {
    observeParents: true,
    observer: true,
    autoHeight: true,
    modules: [Pagination, A11y, EffectFade],
    effect: "fade",
    pagination: {
      clickable: true,
      bulletClass: "bullet",
      bulletActiveClass: "bullet-active",
      renderBullet: (index, className) => {
        return (
          '<span class="' + className + '">' + years[index] + "</span>" // Template literals somehow doesn't work!!!
        );
      },
    },
    slidesPerView: 1,
    fadeEffect: {
      crossFade: true,
    },
  };

  return (
    <S.SwiperWrapper>
      <Swiper {...params}>
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            <S.ColumnLeft>
              <JourneyIcon1 width={90} height={85} />
              <S.SlideTitle>{e.slideTitle}</S.SlideTitle>
              <S.ShortDescription>{e.shortDescription}</S.ShortDescription>
              <S.ParagraphContainer>
                <S.ParagraphTitle>{e.paragraphTitle}</S.ParagraphTitle>
                <S.Paragraph>{e.paragraphContent}</S.Paragraph>
              </S.ParagraphContainer>
              <Button>
                READ MORE <RightArrow />
              </Button>
            </S.ColumnLeft>
            <S.ColumnRight>
              <S.ImgDiv>
                <Image
                  src={e.staticImgPath}
                  layout="fill"
                  objectFit="cover"
                  alt="space"
                />
              </S.ImgDiv>
              <S.FloatingImg>
                <div className="window">
                  <div className="red" />
                  <div className="yellow" />
                  <div className="green" />
                </div>
                <div className="float-img">
                  <Image
                    src={e.floatImgPath}
                    layout="fill"
                    objectFit="cover"
                    alt="two cosmonauts"
                  />
                </div>
              </S.FloatingImg>
            </S.ColumnRight>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperWrapper>
  );
};
