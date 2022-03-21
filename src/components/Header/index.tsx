import React, { FC, useState, useEffect, useCallback } from "react";
import useHeadroom from "@utils/custom/useHeadroom";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";
import { SvgLogo } from "../SVGs/SvgLogo";

import { Props } from "./Header";
import * as S from "./styled";

export const Header: FC<Props> = ({ data }) => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const isPinned = useHeadroom({
    fixAt: 62,
  });

  const mobileNavHandler = (element: boolean) => {
    setMobileNav(element);
  };

  useEffect(() => {
    mobileNav
      ? document.body.classList.add("is-hidden")
      : document.body.classList.remove("is-hidden");
  }, [mobileNav]);

  const links = data.map(({ id, href, title }) => (
    <S.SmoothLink
      key={id}
      to={href}
      smooth
      hashSpy
      onClick={() => setMobileNav(false)}
      ismobileactive={mobileNav ? mobileNav : undefined}
    >
      {title}
    </S.SmoothLink>
  ));

  return (
    <>
      <S.Header isPinned={isPinned}>
        <S.Container>
          <SvgLogo />
          <S.Nav>{links}</S.Nav>
          <Button content="DOWNLOAD PDF" />
          <CloseButton
            isMobileActive={mobileNav}
            mobileNav={mobileNavHandler}
          />
        </S.Container>
      </S.Header>
      <S.MobileNav>
        <S.Nav isMobileActive={mobileNav}>
          {links}
          <Button content="DOWNLOAD PDF" />
        </S.Nav>
      </S.MobileNav>
    </>
  );
};
