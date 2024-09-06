import kind from "@enact/core/kind";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import { Router } from "../router";
import { HashRouter } from "react-router-dom";
import * as S from "./App.styles";

const AppBase = kind({
  name: "App",
  render: (props) => (
    <S.AppContainer className={props.className}>
      <HashRouter>
        <Router />
      </HashRouter>
    </S.AppContainer>
  ),
});

const App = ThemeDecorator(AppBase);

export default App;
export { App, AppBase };
