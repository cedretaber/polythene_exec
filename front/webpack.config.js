module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist/",
        filename: "main.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel", query: { presets: ["es2015", "stage-0"] } }
        ]
    }
}
