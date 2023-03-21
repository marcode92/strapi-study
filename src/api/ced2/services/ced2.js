module.exports = {
    firstCategory: async (test) => {
        try {
            const entries = await strapi.entityService.findOne(
                "api::ced2.ced2",
                test,
                {
                    fields: ["test"],
                },
            )

            return entries;
        } catch (err) {
            console.log(err)
        }
    }
}