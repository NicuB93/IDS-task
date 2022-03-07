import Link from "next/link";
import * as S from "./styled";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";
import { SvgLogo } from "../SvgLogo";
import { navbarItems } from "./mock";

export const NavBar = () => {
  return (
    <S.NavContainer>
      <S.NavContent>
        <SvgLogo />
        <S.NavList>
          {navbarItems.map((e) => (
            <S.NavItem key={e.id}>
              <Link href="#">
                <a>{e.content}</a>
              </Link>
            </S.NavItem>
          ))}
        </S.NavList>
        <Button content="DOWNLOAD PDF" />
        <CloseButton />
      </S.NavContent>
    </S.NavContainer>
  );
};
