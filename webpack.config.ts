import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import path from 'path';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}


export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development'
  const isDev = mode === 'development'
  const port = env.port ||  3000


  return buildWebpackConfig({isDev, paths, mode, port})
};