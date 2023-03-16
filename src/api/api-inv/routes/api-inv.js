module.exports = {
      routes: [
        {
          method: "GET",
          path: "/api-inv",
          handler: "api-inv.postsReport",
          config: {
            policies: [],
            middlewares: [],
          },
        },
      ],
    };