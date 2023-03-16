module.exports = {
    inventory: async () => {
        try {
            const entries = await strapi.entityService.findOne(
                "api::ced.ced",
                {
                    fields: ["desc","lev1"],
                    populate:{
                        test: {
                            fields:["desc"]
                        }
                    }
                }
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
    }

}