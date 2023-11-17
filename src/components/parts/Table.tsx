import { CSSProperties } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 0.5em 1em;
  max-width: 50%;
`;

const Title = styled.div`
  font-size: small;
  color: ${(p) => p.theme.colors.text.light};
`;

const TableInner = styled.table`
  width: 100%;
`;

const THead = styled.thead`
  font-size: small;
  color: ${(p) => p.theme.colors.text.light};
  border-bottom: 2px solid gray;
`;

const Th = styled.th`
  border-bottom: 1px solid ${(p) => p.theme.colors.text.xlight};
  font-weight: normal;
  white-space: nowrap;
`;

type Props = {
  title: string;
  header: string[];
  data: (string | number)[][];
  /** 表のアイテムに適用するスタイル。並びをデータと合わせる。 */
  itemStyles?: CSSProperties[];
  style?: CSSProperties;
  className?: string;
};

export function Table(props: Props) {
  return (
    <Wrapper className={props.className} style={props.style}>
      <Title>{props.title}</Title>
      <TableInner>
        <THead>
          <tr>
            {props.header.map((v) => {
              return <Th key={v}>{v}</Th>;
            })}
          </tr>
        </THead>
        <TableBody {...props} />
      </TableInner>
    </Wrapper>
  );
}

// 表の本体データを元に、tbodyのコンポーネントを生成する。
function TableBody(props: Props) {
  const array = [];

  for (const data of props.data) {
    const tr = [];
    for (let i = 0; i < data.length; i++) {
      const style = props.itemStyles == undefined ? {} : props.itemStyles[i];

      tr.push(
        <td style={style} key={`${data[i]}`}>
          {data[i]}
        </td>
      );
    }
    array.push(<tr key={`tr-${data[0]}`}>{tr}</tr>);
  }

  return <tbody>{array}</tbody>;
}
