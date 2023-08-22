import { ThemeProvider, styled } from "styled-components";
import { Menu } from "./Components/Menu";
import { Navbar } from "./Components/Navbar";
import { LightTheme, darkTheme } from "./Utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Video from "./pages/Video";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 20px;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>
      {/* ThemeProvider theme={LightTheme}> */}
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode}></Menu>
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" index element={<Signin />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
