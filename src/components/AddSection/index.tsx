import { useState } from "react";
import * as S from "./styled";

export const AddSection = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum
  enim amet odit. Quas expedita quasi obcaecati eveniet aliquid odio
  accusantium perspiciatis nesciunt fugiat aperiam deleniti cumque, dolore
  quidem sapiente nemo perferendis velit similique incidunt placeat. Dolor
  sint possimus distinctio doloremque, ea, earum veritatis tenetur
  recusandae ipsam ipsa quia? Velit sint alias porro obcaecati vitae
  consequatur accusantium saepe a similique impedit natus qui repellat
  quaerat reiciendis, at illo veritatis enim debitis! Quibusdam, porro
  eaque alias asperiores iure itaque, ullam ab perferendis quisquam
  voluptate minima ratione, at odio commodi recusandae consectetur
  adipisci culpa voluptas vero! Accusantium soluta sint at deleniti iusto.`;

  const showContent = showMore ? content : content.slice(0, 150) + "...";

  return (
    <S.AddSectionContainer>
      <S.AddButton onClick={() => setShowMore(!showMore)} isActive={showMore}>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="vertical"
            x="8.6582"
            y="0.399902"
            width="1.68519"
            height="18.2"
            rx="0.842593"
            fill="white"
          />
          <path
            className="horizontal"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.757 8.65723C18.2224 8.65723 18.5996 9.03447 18.5996 9.49982C18.5996 9.96517 18.2224 10.3424 17.757 10.3424L1.2422 10.3424C0.77685 10.3424 0.399609 9.96517 0.399609 9.49982C0.399609 9.03447 0.77685 8.65723 1.2422 8.65723L17.757 8.65723Z"
            fill="white"
          />
        </svg>
      </S.AddButton>
      <S.AddSectionParagraph>{showContent}</S.AddSectionParagraph>
    </S.AddSectionContainer>
  );
};
