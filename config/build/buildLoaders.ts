import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: ['ts-loader'],
    exclude: /node_modules/
  }

  const cssLoader:webpack.RuleSetRule = {
    test: /\.s[ac]ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }
  return [
    typescriptLoader,
    cssLoader
  ]
}
