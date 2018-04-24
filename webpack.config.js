module.exports = {
    //mode: 'development',
    entry: "./src/app.js", //absolute path
    output: {
        path: __dirname + "/public", //relative path; where the bundled file be located
        filename: "bundle.js"
    },
    devServer: {
        "contentBase": __dirname + "/public", //looks for index.html inside public dir
        port: 3000,
        //hot: true
    }


};
