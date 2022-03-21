import { useState } from "react";
import { Button } from "@components/Button";
import { SpaceSwiper } from "@components/SpaceSwiper";
import { RightArrow } from "@components/SVGs/Arrows";
import { imgPaths } from "./mock";
import * as S from "./styled";

export const SpaceSection = () => {
  const [color, setColor] = useState<string>();
  const colorHandler = (element: string) => {
    setColor(element);
  };

  return (
    <S.SpaceWrapper>
      <S.SpaceContainer>
        <S.SpaceContent>
          <S.Title>Space</S.Title>
          <S.Content>
            Aliquam ornare mauris ex, sed tincidunt neque facilisis id. Maecenas
            vitae ante nec massa varius volutpat. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Praesent congue orci et nunc
            ultricies dapibus. Aliquam condimentum porttitor nulla. Phasellus
            suscipit risus sit amet mi interdum faucibus. Quisque egestas lorem
            ante, id eleifend velit mattis nec.
          </S.Content>
          <Button>
            View All
            <RightArrow />
          </Button>
        </S.SpaceContent>
        <S.SpaceAnimation circleColor={color}>
          <S.CircleContent circleColor={color}>
            <SpaceSwiper data={imgPaths} colorHandler={colorHandler} />
          </S.CircleContent>
          <S.RotatingCircle circleColor={color}>
            <S.InnerRotatingCircle />
          </S.RotatingCircle>
        </S.SpaceAnimation>
      </S.SpaceContainer>
    </S.SpaceWrapper>
  );
};
