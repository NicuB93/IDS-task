import { Header } from "../Header";
import { Hero } from "../Hero";
import { About } from "../AboutSection";
import { SectionMessage } from "../SectionMessage";
import { AddSection } from "../AddSection";
import { JourneySection } from "../JourneySection";
import { Pee } from "../SpacePee";
import { Podcast } from "../PodcastSection";
import { Footer } from "../Footer";
import * as S from "./styled";

import { data } from "../Header/mock";
import { SpaceSection } from "@components/SpaceSection";

export const MainPage = () => {
  return (
    <S.PageContainer>
      <Header data={data} />
      <S.MainWrapper>
        <Hero />
        <About />
        <SectionMessage />
        <AddSection />
        <JourneySection />
        <SpaceSection />
        <Pee />
        <Podcast />
        <Footer />
      </S.MainWrapper>
    </S.PageContainer>
  );
};
