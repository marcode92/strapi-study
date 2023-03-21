module.exports = {
    async firstCategory(ctx,next){
        try {
            const data = await strapi
                .service("api::ced2.ced2")
                .firstCategory(ctx.params.test);

                ctx.body = data;
        } catch(err){
            ctx.badRequest("inv",{errorInfo: err});
        }
    }
};