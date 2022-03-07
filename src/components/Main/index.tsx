import { NavBar } from "../NavBar";
import { SectionMessage } from "../SectionMessage";
import { PageContainer } from "./styled";

export const MainPage = () => {
  return (
    <PageContainer>
      <NavBar />
      <SectionMessage />
    </PageContainer>
  );
};
