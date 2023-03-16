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
};