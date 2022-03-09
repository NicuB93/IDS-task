import { Button } from "../Button";
import * as S from "./styled";

export const AddSection = () => {
  return (
    <S.AddSectionContainer>
      <Button content={"✕"} />
      <S.AddSectionParagraph>
        Duis at enim suscipit, luctus nunc eu, varius lacus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Mauris eu lacus congue ...
      </S.AddSectionParagraph>
    </S.AddSectionContainer>
  );
};
