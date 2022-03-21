import Image from "next/image";
import * as S from "./styled";

export const About = () => {
  return (
    <S.AboutWrapper id="about">
      <S.AboutContainer>
        <S.About>
          <S.AboutHead>About</S.AboutHead>
          <S.AboutTitle>IDS&apos;s Knowledge Management in Action</S.AboutTitle>
        </S.About>
        <S.AboutDescription>
          <S.AboutImg>
            <Image
              src="/assets/img/aboutImg.png"
              layout="fill"
              objectFit="cover"
              alt="space"
            />
          </S.AboutImg>
          <S.AboutParagraphContainer>
            <S.AboutParagraph>
              Sed metus ligula, auctor eget sagittis eu, elementum vel est. Nam
              in dolor bibendum, mollis felis eget, ullamcorper odio. Praesent
              nunc nisi, rutrum mollis cursus vel, aliquet a nunc. Sed a varius
              sapien. Nulla et massa faucibus, pharetra felis at, aliquam neque.
              Maecenas volutpat malesuada erat eu finibus. Proin in magna id
              massa pharetra rutrum eu nec est. Etiam ultrices tortor sapien,
              placerat ultrices nisl viverra non.
            </S.AboutParagraph>
          </S.AboutParagraphContainer>
        </S.AboutDescription>
      </S.AboutContainer>
    </S.AboutWrapper>
  );
};
