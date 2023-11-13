import { ViewMode } from "@/misc/mode";
import styled from "styled-components";
import { Item, ItemProps } from "./Item";
import { useLocation } from "react-router-dom";

const items: ItemProps[] = [
  { mode: ViewMode.Main, title: "Main Dashboard", selected: true, link: "/" },
  { mode: ViewMode.List, title: "Book List", selected: false, link: "/list" },
];

const Wrapper = styled.div`
  min-height: 100dvh;
  background: white;
`;

const Title = styled.div`
  font-size: 1em;
  text-align: center;
  font-weight: 600;
  margin: 1em 0;
`;

const Small = styled.span`
  font-size: small;
  font-weight: 600;
`;

export type Props = { className?: string };

export function Sidebar(props: Props) {
  const location = useLocation().pathname;

  return (
    <Wrapper>
      <Title className={props.className}>
        Dashboard
        <br />
        Sample
        <br />
        <Small>[Styled-Components]</Small>
      </Title>
      {items.map((v) => {
        return <Item key={v.mode} {...v} selected={location === v.link} />;
      })}
    </Wrapper>
  );
}
