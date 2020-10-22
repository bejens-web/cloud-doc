const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssPathResolver = require('./cssPathResolver');
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new htmlPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['manifest', 'vendor', 'main'],
            chunksSortMode: 'auto'
        }),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].[chunkhash:6].css');
            },
            allChunks: true
        }),
        new CommonsChunkPlugin({
            name: 'main',
            minChunks: 2,
            children: true,
            async: true,
        }),
        new CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets',
                to: './assets',
                ignore: ['*.less']
            }
        ]),
    ],
    entry: {
        main: ["babel-polyfill", './src/app/index.js'],
        vendor: [
            'react',
            "react-cookie",
            "react-dom",
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle.[hash:4].js',
        chunkFilename: 'js/[name].[chunkhash:4].js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'post',
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [
                        "env",
                        "react",
                        "stage-0"
                    ],
                    plugins: [
                        ["transform-runtime", {
                            "helpers": false,
                            "polyfill": false,
                            "regenerator": true,
                            "moduleName": "babel-runtime"
                        }],
                        ["import", {"libraryName": "antd", "style": true}],
                        ["transform-decorators-legacy"]
                    ]
                },
                include: path.join(__dirname, './src/app')
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loaders: [
                    {
                        loader: path.resolve(__dirname, 'cssPathResolver')
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'static/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: require.resolve('json-loader')
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader', options: {
                                minimize: true
                            }
                        },
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 2 versions',
                                            'not ie < 9',
                                        ],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                            },
                        }]
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', options: {
                                minimize: true
                            }
                        },
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 2 versions',
                                            'not ie < 9',
                                        ],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                            },
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                modifyVars: {
                                    "@primary-color": "#3f8ff1",
                                    "@font-size-base": '12px',
                                    "@btn-font-size-lg": '14px',
                                    "@border-radius-base": '6px',
                                    "@font-family-no-number": 'Helvetica , Neue, Helvetica, Tahoma,Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif'
                                }, //配置antd 主题颜色
                            },
                        }],
                }),
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.less'], // webpack版本1为 '' , 2不能为 ''
        alias: {
            '@': path.resolve(__dirname, 'src/app'),
            'STORE': path.resolve(__dirname, 'src/app/store')
        }
    },

    //打开的端口
    devServer: {
        port: 8080
    }
};
