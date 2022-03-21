import * as B from "../styled";
import * as S from "./styled";

import { JourneyIcon1 } from "@components/SVGs/JourneyIcons";
import { RightArrow } from "@components/SVGs/Arrows";
import { Button } from "@components/Button";

type KnowledgeProps = {
  data: {
    slideTitle: string;
    shortDescription: string;
    paragraphTitle: string;
    paragraphContent: string;
    years: string;
  }[];
};

export const MobileJourney = ({ data }: KnowledgeProps) => {
  return (
    <S.MobileJourneyWrapper>
      {data.map(
        (
          {
            slideTitle,
            shortDescription,
            paragraphContent,
            paragraphTitle,
            years,
          },
          idx
        ) => (
          <B.ColumnLeft key={idx}>
            <S.Years>
              <div className="years">{years}</div>
              <div className="bullet" />
            </S.Years>
            <JourneyIcon1 width={60} height={60} />
            <B.SlideTitle>{slideTitle}</B.SlideTitle>
            <B.ShortDescription>{shortDescription}</B.ShortDescription>
            <B.ParagraphContainer>
              <B.ParagraphTitle>{paragraphTitle}</B.ParagraphTitle>
              <B.Paragraph>{paragraphContent}</B.Paragraph>
            </B.ParagraphContainer>
            <Button>
              READ MORE <RightArrow />
            </Button>
          </B.ColumnLeft>
        )
      )}
    </S.MobileJourneyWrapper>
  );
};
