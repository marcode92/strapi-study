
module.exports = {
    async getFirstCategory(ctx,next){
        try {
            const data = await strapi
                .service("api::ced2.ced2")
                .getFirstCategory(ctx.params.test);

                ctx.body = data;
        } catch(err){
            ctx.badRequest("inv",{errorInfo: err});
        }
    },
    async createFirstCategory(ctx,next){
        try {
            const objectTest = {
                data:{
                    element:ctx.body.element,
                    category: ctx.body.category
                }
            }
            console.log(strapi.requestContext.get());
            const data = await strapi
                .service("api::ced2.ced2")
                .createFirstCategory(objectTest);

                ctx.body = data;

        } catch(err){
            ctx.badRequest("error",{errorInfo: err});
        }
    }
};