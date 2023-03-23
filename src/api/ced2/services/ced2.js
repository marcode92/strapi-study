module.exports = {
    getFirstCategory: async (test) => {
        try {
            const entries = await strapi.db.query('api::ced2.ced2').findMany(
                {
                    where: {
                        test:{
                            $contains: test
                        }
                    }
                }
            )

            return entries;
        } catch (err) {
            console.log(err)
        }
    },
    createFirstCategory: async (objectTest) => {
        try {
            const entries = await strapi.entityService.create('api::ced2.ced2',objectTest)

            return entries;
        } catch (err) {
            console.log("cazzo",err)
        }
    },
    
}