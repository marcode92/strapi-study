module.exports = {
    routes: [
        {
            method:"GET",
            path:"/ced2/:test",
            handler:"ced2.getFirstCategory",
            config: {
                policies: [],
                middlewares: [],
              }, 
        },
        {
            method:"POST",
            path:"/ced2",
            handler:"ced2.createFirstCategory",
            config: {
                policies: [],
                middlewares: [],
              }, 
        },
    ]
}