import { Paths } from "../../../../../router/paths/path.routes";
import * as S from "./menu.styles";
import { Episodes, Home, Search, Setting } from "../assets/svg";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  const links = [
    {
      icon: Search,
      path: Paths.SEARCH,
    },
    {
      icon: Home,
      path: Paths.HOME,
    },
    {
      icon: Episodes,
      path: Paths.EPISODES,
    },
    {
      icon: Setting,
      path: Paths.SETTINGS,
    },
  ];

  const handleChangeRoute = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <S.MenuContainer>
      {links.map((link) => (
        <S.MenuLink onClick={handleChangeRoute(link.path)} key={link.path}>
          {<link.icon />}
        </S.MenuLink>
      ))}
    </S.MenuContainer>
  );
};
