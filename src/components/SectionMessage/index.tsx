import Image from "next/image";
import Link from "next/link";
import * as S from "./styled";
import { sectionContent } from "./mock";

export const SectionMessage = () => {
  return (
    <S.GridContainer>
      <S.ColumnLeft>
        <S.ImgDiv>
          <Image
            layout="fill"
            src="/assets/img/cardImg.png"
            alt="section"
            objectFit="cover"
            priority={true}
          />
        </S.ImgDiv>
        <S.GreenBox>
          <S.ImageTitle>{sectionContent.imgTitle}</S.ImageTitle>
          <S.ImageDescription>
            <S.ImageParagraph>{sectionContent.imgDescription}</S.ImageParagraph>
            <Link href="mailto:lordVoldemort@example.com">
              <a>lordVoldemort@example.com</a>
            </Link>
          </S.ImageDescription>
        </S.GreenBox>
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.Message>
          <S.MessageTitle>{sectionContent.messageTitle}</S.MessageTitle>
          <S.MessageHead>{sectionContent.messageHeader}</S.MessageHead>
          <S.MessageContent>{sectionContent.messageContent}</S.MessageContent>
        </S.Message>
      </S.ColumnRight>
    </S.GridContainer>
  );
};
