import React, { FC } from "react";
import Image from "next/image";
import * as S from "./styled";

export const Hero: FC = () => {
  return (
    <S.HeroWrapper>
      <S.HeroContainer>
        <S.ColumnLeft>
          <S.HeadTitle>Welcome to the insert some lorem copy here</S.HeadTitle>
          <S.HeadDescription>
            Vision, Learning, Collaboration.
          </S.HeadDescription>
          <S.HeadMotto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.HeadMotto>
        </S.ColumnLeft>
        <S.ColumnRight>
          <S.ImageDiv>
            <Image
              layout="responsive"
              width="4"
              height="4"
              src="/assets/img/headerImg.png"
              alt="section"
              objectFit="contain"
              priority={true}
            />
          </S.ImageDiv>
        </S.ColumnRight>
      </S.HeroContainer>
    </S.HeroWrapper>
  );
};
