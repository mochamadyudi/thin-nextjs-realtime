module.exports = {
    presets: [
        [
            "next/babel",
            {
                "preset-env": {},
                "transform-runtime": {},
                "styled-jsx": {},
                "class-properties": {}
            }
        ],
        [
            require.resolve('@babel/preset-env'),
            {
                targets:{
                    node: "current",
                }
            }
        ]
    ],
    plugins: [
        require.resolve('babel-plugin-transform-export-extensions'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve("@babel/plugin-proposal-private-methods"),
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root:["."],
                extensions: [".js"],
                alias: {
                    "@handler": "./lib/handler",
                    "@indozone/service": "./lib/service",
                    "@indozone/config": "./lib/config",
                    "@indozone/app": "./src/config",
                    "@indozone/exception": "./lib/exceptions",
                    "@indozone/constants" : "./lib/constants",
                    "@indozone/utils": "./lib/utils/",
                    "@indozone/effect": "./src/effects",
                    "@indozone/prop-types": "./src/prop-types",
                    "@indozone/button": "./src/component/shared-component/button",
                    "@indozone/reduxAction": "./src/redux/actions",
                    "@indozone/icons": "./src/component/shared-component/icon",
                    "@indozone/v2/icons": "./src/component/shared-component/v2/icon",
                    "@indozone/LayoutContainer":"./src/component/layout/container",
                    "@indozone/layout/section": "./src/component/shared-component/section",
                    "@indozone/badge": "./src/component/shared-component/badge",
                    "@indozone/client/utils" : "./src/utils"
                }
            }
        ]
    ]
}
