import { SwiperSlider } from "@components/SwiperJourney";
import * as S from "./styled";
import { sliderData } from "./mock";
import { useWidth } from "@utils/custom/useWindowSize";
import { MobileJourney } from "@components/SwiperJourney/Mobile";

export const JourneySection = () => {
  const width = useWidth();

  return (
    <S.JournewWrapper id="journey">
      <S.JourneyContainer>
        <S.IDSKnowledge>
          <S.columnLeft>
            IDS’s Knowledge Management Journey: Two Decades of Learning,
            Engagement, and Vision
          </S.columnLeft>
          <S.columnRight>
            <S.RightHead>
              The first president of Asian Development Bank (ADB), Takeshi
              Watanabe, often emphasized that the bank was an institution that
              “learns before it teaches.”
            </S.RightHead>
            <S.RightParagraph>
              Morbi sapien ex, tincidunt ut tincidunt et, luctus ac massa. In
              non dapibus ante. Nulla facilisi. Nunc sollicitudin viverra nibh
              nec malesuada. Maecenas elementum, magna eu semper efficitur,
              mauris lacus rhoncus orci, nec suscipit augue est ac nulla.
              Maecenas porttitor aliquet augue eget tincidunt. Donec tempor,
              lacus at accumsan accumsan, purus nisl malesuada sapien, nec
              placerat augue velit ut felis. Duis at enim suscipit, luctus nunc
              eu, varius lacus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Mauris eu lacus
              congue, lacinia leo non, facilisis tortor.
            </S.RightParagraph>
          </S.columnRight>
        </S.IDSKnowledge>
        <MobileJourney data={sliderData} />
        <SwiperSlider data={sliderData} />
      </S.JourneyContainer>
    </S.JournewWrapper>
  );
};
