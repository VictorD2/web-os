import { RouteObject } from "react-router-dom";
import { Paths } from "./paths/path.routes";
import { AppLayout } from "../shared/layout/app-layout/app-layout";
import {
  EpisodesPage,
  HomePage,
  PlayerPage,
  SearchPage,
  SettingsPage,
} from "../views";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.INDEX,
    element: <AppLayout />,
    children: [
      { path: Paths.HOME, element: <HomePage /> },
      { path: Paths.SEARCH, element: <SearchPage /> },
      { path: Paths.SETTINGS, element: <SettingsPage /> },
      { path: Paths.EPISODES, element: <EpisodesPage /> },
    ],
  },
  { path: Paths.PLAYER, element: <PlayerPage /> },
];
