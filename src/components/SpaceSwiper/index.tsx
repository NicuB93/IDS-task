import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  Swiper as SwiperParams,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import * as S from "./styled";
import { strictEqual } from "assert";

type SwiperData = {
  data: {
    color: string;
    title: string;
    imgPath: string;
  }[];
  colorHandler: (element: string) => void;
};

export const SpaceSwiper: FC<SwiperData> = ({ data, colorHandler }) => {
  const [colors, setColors] = useState<string>("");

  useEffect(() => {
    colorHandler(colors);
  }, [colorHandler, colors]);

  const params: SwiperProps = {
    autoplay: { delay: 1000 },
    onSlideChange: (swiper: SwiperParams) => {
      setColors(data[swiper.realIndex].color);
    },
    autoHeight: true,
    modules: [Pagination, A11y, EffectFade, Autoplay],
    effect: "fade",
    pagination: {
      type: "fraction",
      renderFraction: (currentClass: string, totalClass: string) => {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          "/" +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    fadeEffect: {
      crossFade: true,
    },
  };

  return (
    <S.SwiperWrapper>
      <Swiper {...params}>
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            <S.IconDiv>
              <Image
                src={e.imgPath}
                layout="responsive"
                width="80"
                height="80"
                alt="icons"
              />
            </S.IconDiv>
            <S.IconTitle>{e.title}</S.IconTitle>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperWrapper>
  );
};
