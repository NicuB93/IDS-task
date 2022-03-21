import Image from "next/image";
import * as S from "./styled";

export const Pee = () => {
  return (
    <S.PeeWrapper id="knowledge">
      <S.PeeContainer>
        <S.PeeContent>
          <S.PeeHead>The IDS</S.PeeHead>
          <S.PeeDescription>
            Donec tristique dolor non lectus tincidunt, a lacinia libero
            suscipit. Quisque ultrices ex lectus, non lobortis nibh volutpat at.
            Vivamus auctor urna at nulla vulputate ultricies. Aliquam dictum est
            elit, a imperdiet ante sollicitudin et. Suspendisse accumsan non
            mauris vitae cursus. Nullam posuere dignissim arcu, quis dictum quam
            tempus eget. Sed scelerisque tortor eu hendrerit aliquam. Nullam
            maximus auctor vulputate. Maecenas in finibus metus.{" "}
          </S.PeeDescription>
        </S.PeeContent>
        <S.PeeImage>
          <Image
            src="/assets/img/spacePee.png"
            layout="fill"
            alt="pee in space"
            objectFit="cover"
          />
        </S.PeeImage>
      </S.PeeContainer>
    </S.PeeWrapper>
  );
};
