module.exports = {
    routes: [
        {
            method:"GET",
            path:"/ced",
            handler:"ced.inventory",
            config: {
                policies: [],
                middlewares: [],
              }, 
        }
            
    ]
}