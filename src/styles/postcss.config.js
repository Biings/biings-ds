module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env'),
        require('cssnano')({
            preset: 'default',
            discardComments: {removeAll: true}
        })
    ]
}