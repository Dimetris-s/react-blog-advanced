export enum Routes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const routerPaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about'
}
