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
        },
        {
            method:"GET",
            path:"/ced/:id",
            handler:"ced.getone",
            config: {
                policies: [],
                middlewares: [],
              }, 
        },
        {
            method:"POST",
            path:"/ced",
            handler:"ced.create",
            config: {
                policies: [],
                middlewares: [],
              }, 
        }
            
    ]
}