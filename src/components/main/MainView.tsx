import styled from "styled-components";
import { Stat } from "../parts/Stat";
import {
  HiOutlineBookOpen,
  HiOutlineDocumentReport,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { Table } from "../parts/Table";

const Wrapper = styled.div`
  padding: 0;
  margin: 1em;
  display: flex;
  align-items: flex-start;
  gap: 1em 1em;
`;

export function MainView() {
  return (
    <>
      <Wrapper>
        <Stat
          icon={<HiOutlineDocumentReport />}
          title={"本日の販売数"}
          value={"199,999 冊"}
          width="20%"
          arrow="+"
          ratio="12.3%"
          ratioAppend="（前日比）"
        />
        <Stat
          icon={<HiOutlineBookOpen />}
          title={"紙（本日・内訳）"}
          value={"99,999 冊"}
          width="20%"
          arrow="-"
          ratio="12.3%"
          ratioAppend="（前日比）"
        />
        <Stat
          icon={<HiOutlineGlobeAlt />}
          title={"電子書籍（本日・内訳）"}
          value={"100,000 冊"}
          width="20%"
        />
        <Stat title={"天気"} value={"晴れ"} width="20%" />
      </Wrapper>
      <Wrapper>
        <Table
          title="売上上位"
          header={["順位", "タイトル", "売上数"]}
          data={[
            [1, "引きの子", "123,456"],
            [2, "早々のリターン", "21,000"],
            [
              3,
              "僕のことをちゅきちゅきちゅきちゅきと言ってくれる10人の彼女",
              "12,000",
            ],
            [99, "破滅の刀", "8,000"],
          ]}
          itemStyles={[
            { textAlign: "center", fontSize: "small" },
            { fontWeight: "bold", padding: "0 0.5em" },
            { textAlign: "right" },
          ]}
        />
      </Wrapper>
    </>
  );
}
