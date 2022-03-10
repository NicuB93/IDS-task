import { FC } from "react";
import Link from "next/link";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";
import { SvgLogo } from "../SVGs/SvgLogo";

import { Props } from "./NavBar";
import { data } from "./mock";

import * as S from "./styled";

export const NavBar: FC<Props> = () => {
  return (
    <S.Header>
      <S.Container>
        <SvgLogo />
        <S.Nav>
          {data.map(({ id, href, title }) => (
            <Link {...{ href }} key={id} passHref>
              <S.Link>{title}</S.Link>
            </Link>
          ))}
        </S.Nav>
        <Button content="DOWNLOAD PDF" />
        <CloseButton />
      </S.Container>
    </S.Header>
  );
};
