import { NavBar } from "../NavBar";
import { Header } from "../Header";
import { About } from "../AboutSection";
import { SectionMessage } from "../SectionMessage";
import { PageContainer } from "./styled";

export const MainPage = () => {
  return (
    <PageContainer>
      <NavBar />
      <Header />
      <About />
      <SectionMessage />
    </PageContainer>
  );
};
