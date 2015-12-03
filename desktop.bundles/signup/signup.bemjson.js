({
    block: 'page',
    title: 'mammon',
    head: [
        { elem : 'css', url : 'hello.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'hello.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'hello',
            content: 'test'
        }
    ]
})
