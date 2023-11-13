import { cloneElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 0.5em 1em;
  display: flex;
`;

const Title = styled.div`
  font-size: small;
  color: ${(p) => p.theme.colors.text.light};
`;

const Value = styled.div`
  font-size: 120%;
  font-weight: 600;
`;

const Icon = styled.div`
  margin-right: 1em;
  display: flex;
  align-items: center;
  > svg {
    color: ${(p) => p.theme.colors.primary.dark};
  }
`;

const Ratio = styled.div`
  color: ${(p) => p.theme.colors.text.light};
  font-size: small;
  display: flex;
`;

export type Props = {
  icon?: JSX.Element;
  title: string;
  value: number | string;
  /** 表示幅。ただし並べたものの合計幅がオーバーするときは勝手に縮まるので、目安程度 */
  width?: string;
  /** 増減の矢印 */
  arrow?: "+" | "-";
  /** 増減の文字列 */
  ratio?: string;
  /** 増減に関する注釈（前日比等） */
  ratioAppend?: string;
};

export function Stat(props: Props) {
  const icon =
    props.icon && cloneElement(props.icon, { size: "2em", margin: "auto" });

  return (
    <Wrapper style={{ width: props.width }}>
      {icon && <Icon>{icon}</Icon>}
      <div>
        <Title>{props.title}</Title>
        <Value>{props.value}</Value>
        <Ratio>
          {props.arrow && iconFromArrow(props.arrow, props.ratio)}
          {props.ratioAppend}
        </Ratio>
      </div>
    </Wrapper>
  );
}

function iconFromArrow(arrow?: "+" | "-", ratio?: string) {
  if (arrow === undefined) {
    return <div>{ratio} </div>;
  } else if (arrow === "+") {
    return <div style={{ color: "#48b438" }}>▲{ratio} </div>;
  } else if (arrow === "-") {
    return <div style={{ color: "#ca3954" }}>▼{ratio} </div>;
  }
}
