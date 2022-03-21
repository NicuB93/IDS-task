import { Button } from "@components/Button";
import * as S from "./styled";

export const Podcast = () => {
  return (
    <S.PodcastWrapper>
      <S.PodcastContainer>
        <S.PodcastContent>
          To learn even more about IDS’s knowledge solutions, check out IDS’s
          TED-x style talks and podcasts.
        </S.PodcastContent>
        <Button>VIEW PODCAST</Button>
      </S.PodcastContainer>
    </S.PodcastWrapper>
  );
};
