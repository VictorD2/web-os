import { Outlet } from "react-router-dom";
import * as S from "./app-layout.styles";
import { Menu } from "./components/menu";

export const AppLayout = () => {
  return (
    <S.LayoutContainer>
      <Menu />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.LayoutContainer>
  );
};
