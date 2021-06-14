// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    favicon:  './src/assets/img/logo.svg',
});

const htmlIndexRu = new HtmlWebPackPlugin({
    template: './src/ru/index.html',
    filename: './ru/index.html',
    favicon:  './src/assets/img/logo.svg',
});

module.exports = ({ mode } = { mode: 'production' }) => ({
    mode,
    devtool: 'source-map',
    //devtool: 'eval-cheap-module-source-map',
    stats:   {
        children: false,
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin":  "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        },
        hot:                true,
        historyApiFallback: {
            index: '/',
        },
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias:      {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    entry: {
        main: './src/index.tsx',
    },
    output: {
        filename:      '[name].js',
        chunkFilename: '[name].js?ver=[chunkhash]',
        publicPath:    '/',
    },
    module: {
        rules: [
            {
                test:    /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use:     {
                    loader:  'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                    },
                },
            },
            {
                test: /.html$/,
                use:  [
                    { loader: "html-loader" }
                ],
            },
            {
                test: /ru\/.html$/,
                use:  [
                    { loader: "html-loader" }
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use:  [
                    'style-loader',
                    'css-loader',
                    {
                        loader:  'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions:    {
                                fiber: false,
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name:       '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    }
                ],
            },
            {
                test: /assets\/img\/.*\.(png|svg|jpe?g|gif)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    }
                ],
            },
            {
                test:    /\.svg$/,
                include: path.join(__dirname, 'src/assets/svg/'),
                use:     [
                    {
                        loader:  'svg-sprite-loader',
                        options: {
                            symbolId: 'icon-[name]',
                        },
                    },
                    {
                        loader:  'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false }},
                                { convertPathData: false },
                                { removeAttrs: { attrs: '*:(stroke|fill):((?!^none$).)*' }}
                            ],
                        },
                    }
                ],
            }
        ],
    },
    performance: { hints: false },
    plugins:     [
        new Dotenv(),
        new ForkTsCheckerWebpackPlugin(),
        htmlPlugin,
        htmlIndexRu,
        new CopyPlugin([{ from: './src/assets/img', to: 'img' }]),
        new FaviconsWebpackPlugin({
            logo:     './src/assets/favicon/logo-fav.png', // svg works too!
            mode:     'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
            devMode:  'webapp', // optional can be 'webapp' or 'light' - 'light' by default
            favicons: {
                appName:        'Безкоштовні психологічні консультації під час COVID-19',
                appDescription: 'Під час жорстких заходів самоізоляції і COVID-19 деяким з нас потрібна психологічна підтримка.',
                //developerName: 'Me',
                developerURL:   null, // prevent retrieving from the nearest package.json
                background:     '#ddd',
                theme_color:    '#fff',
                icons:          {
                    coast:  false,
                    yandex: false,
                },
            },
        })
    ],
});
