import { Route, Routes } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import styled, { ThemeProvider } from "styled-components";
import { THEME } from "@/misc/theme";
import { MainView } from "./main/MainView";

const StyledSidebar = styled(Sidebar)`
  width: 200px;
  flex-shrink: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  background: ${(p) => p.theme.colors.background.light};
`;

const MainContents = styled.div`
  width: 100%;
`;

export function App() {
  return (
    <ThemeProvider theme={THEME}>
      <FlexWrapper>
        <StyledSidebar />
        <MainContents>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/list" element={<Main2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContents>
      </FlexWrapper>
    </ThemeProvider>
  );
}

// function Main1() {
//   return <h1>メイン1</h1>;
// }
function Main2() {
  return <h1>メイン2</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}
