module.exports = {
    routes: [
        {
            method:"GET",
            path:"/ced2/:test",
            handler:"ced2.firstCategory",
            config: {
                policies: [],
                middlewares: [],
              }, 
        },
    ]
}