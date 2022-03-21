import { FC } from "react";
import * as S from "./styled";

type ButtonProps = {
  content?: string;
};

export const Button: FC<ButtonProps> = ({ content, children }) => {
  return (
    <S.Button className="button">
      {content}
      {children}
    </S.Button>
  );
};
