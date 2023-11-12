import { Route, Routes } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import styled, { ThemeProvider } from "styled-components";
import { THEME } from "@/misc/theme";

const StyledSidebar = styled(Sidebar)`
  flex-shrink: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const MainContents = styled.div``;

export function App() {
  return (
    <ThemeProvider theme={THEME}>
      <FlexWrapper>
        <StyledSidebar />
        <MainContents>
          <Routes>
            <Route path="/" element={<Main1 />} />
            <Route path="/list" element={<Main2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContents>
      </FlexWrapper>
    </ThemeProvider>
  );
}

function Main1() {
  return <h1>メイン1</h1>;
}
function Main2() {
  return <h1>メイン2</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}
