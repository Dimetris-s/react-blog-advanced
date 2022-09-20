import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { routerPaths, Routes } from 'shared/config/routerConfig';



export const routes: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: routerPaths.main,
    element: <MainPage/>
  },
  [Routes.ABOUT]: {
    path: routerPaths.about,
    element: <AboutPage/>
  }
}
