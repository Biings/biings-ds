module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-cssnext')({
            browsers: [
                "defaults"
            ],
            verbose:  true
        }),
        require('cssnano')({
            preset: 'default'
        })
    ]
}