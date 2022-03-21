import { Button } from "@components/Button";
import { RightArrow } from "@components/SVGs/Arrows";
import * as S from "./styled";

export const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.Column className="left">
          <S.ColumnContainer>
            <S.Head>About IDB Knowledge Advisory Services Center</S.Head>
            <S.Content>
              Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat
              volutpat. Curabitur ante lorem, vehicula ut lacinia cursus,
              posuere nec turpis. Praesent bibendum turpis ut leo porttitor, sit
              amet tempor turpis convallis. Nullam nec pharetra turpis, sed
              elementum arcu. Nullam venenatis sit amet justo id euismod. Nulla
              dictum ligula commodo venenatis luctus. Duis at enim suscipit,
              luctus nunc eu, varius lacus. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Mauris eu lacus congue, lacinia leo non, facilisis tortor. Nam
              ultricies enim at dolor porta, at malesuada lorem luctus. Maecenas
              id porttitor magna. Suspendisse aliquet semper nulla, in aliquam
              elit auctor quis. Vestibulum vel turpis nibh.
            </S.Content>
          </S.ColumnContainer>

          <Button>
            READ MORE <RightArrow />
          </Button>
        </S.Column>
        <S.Column className="right">
          <S.ColumnContainer>
            <S.Head>About IDB</S.Head>
            <S.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              lectus nulla, mollis ac facilisis id, auctor sed justo. Sed ut
              consectetur massa. Fusce tristique semper justo, ac porta tortor
              consectetur a. Ut ullamcorper vel eros non efficitur. Fusce eu
              tortor ipsum. Suspendisse varius interdum dapibus. Suspendisse
              potenti.{" "}
            </S.Content>
          </S.ColumnContainer>

          <S.Copyright>
            © 2021 Insomniac Design Study Website created by Insomniac Design,
            Inc.
          </S.Copyright>
        </S.Column>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
