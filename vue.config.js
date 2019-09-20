const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new FileManagerPlugin({
                onEnd: [
                    {
                        copy: [
                            {source: "./dist/index.html", destination: "./dist/200.html"},
                        ],
                    },
                ],
            }),
        ],
    },
};
