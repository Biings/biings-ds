module.exports = {
    sourceMap: false,
    plugins: [
        require('postcss-import')({
            sourceMap: false
        }),
        require('postcss-preset-env'),
        require('cssnano')({
            preset: 'default',
            discardComments: {removeAll: true}
        })
    ]
}