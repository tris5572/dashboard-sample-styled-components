import { ViewMode } from "@/misc/mode";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  margin: 8px 5%;
  padding: 8px;
  background: white;
  font-size: small;
  font-weight: 600;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  color: ${(p) => p.theme.colors.text.main};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const SelectedBox = styled(Box)`
  background: ${(p) => p.theme.colors.background.light};
  border-left-color: ${(p) => p.theme.colors.primary.main};
  border-right-color: ${(p) => p.theme.colors.primary.main};
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export type ItemProps = {
  mode: ViewMode;
  title: string;
  selected: boolean;
  link: string;
};

export function Item(props: ItemProps) {
  return (
    <StyledLink to={props.link}>
      {props.selected ? (
        <SelectedBox>{props.title}</SelectedBox>
      ) : (
        <Box>{props.title}</Box>
      )}
    </StyledLink>
  );
}
