module.exports = {
    async inventory(ctx,next){
        try {
            const data = await strapi
                .service("api::ced.ced")
                .inventory();

                ctx.body = data;
        } catch(err){
            ctx.badRequest("inv",{errorInfo: err});
        }
    },
    async getone(ctx,next){
        try {
            const data = await strapi
                .service("api::ced.ced")
                .getone(ctx.params.id);

                ctx.body = data;
        } catch(err){
            ctx.badRequest("error",{errorInfo: err});
        }
    },
    async create(ctx,next){
        try {
            const objectTest = {
                data:{
                    id:"4",
                    desc: "sdf"
                }
            }
            const data = await strapi
                .service("api::ced.ced")
                .create(objectTest);

                ctx.body = data;
        } catch(err){
            ctx.badRequest("error",{errorInfo: err});
        }
    },
};