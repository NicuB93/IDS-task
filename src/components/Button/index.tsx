import * as S from "./styled";

type ButtonProps = {
  content?: string;
};

export const Button = ({ content }: ButtonProps) => {
  return <S.Button>{content}</S.Button>;
};
