module.exports = {
    inventory: async () => {
        try {
            const entries = await strapi.entityService.findMany(
                "api::ced.ced",
                {
                    fields: ["id,desc"],
                    populate:{
                        test: {
                            fields:["id,desc"]
                        }
                    },
                },
            )
/* 
            let entriesReduced;
            if (entries && Array.isArray(entries)) {
              entriesReduced = entries.reduce((acc, item) => {
                acc = acc || [];
                acc.push({
                  desc:item.desc,
                  lev1:item.lev1,
                  desc2:item.desc
                });
                return acc;
              }, []);
            } */
            return entries;
        } catch (err) {
            console.log(err)
        }
    },
    getone: async (id) => {
        try {
            const entries = await strapi.entityService.findOne(
                "api::ced.ced",
                id,
                {
                    fields: ["id, desc,lev1"],
                    populate:{
                        test: {
                            fields:["id"]
                        }
                    },
                },
            )

            return entries;
        } catch (err) {
            console.log(err)
        }
    },
    create: async (obj) => {
        try {
            const entries = await strapi.entityService.create("api::ced.ced",obj)

            return entries;
        } catch (err) {
            console.log(err)
        }
    }

}