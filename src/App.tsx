import { FC } from "react";
import { Outlet } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import heartIcon from "./assets/icon-heart.svg";
import GlobalStyles from "./ui/global-styles";
import { Container, Footer, Header, Icon, Title } from "./App.styles";

const App: FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <Title>
          Pokédex +{" "}
          <a href="https://vitejs.dev" target="_blank">
            <Icon src={viteLogo} className="logo" alt="Vite logo" />
          </a>{" "}
          +{" "}
          <a href="https://reactjs.org" target="_blank">
            <Icon src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Title>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <p>
          Crafted with{" "}
          <Icon src={heartIcon} alt="Heart icon" width="16" height="16" /> by{" "}
          <a href="https://ladybenko.net">ladybenko</a>.
        </p>
      </Footer>
    </Container>
  );
};

export default App;
