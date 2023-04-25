export default ({ env }) => ({
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        getTimeout: 500,
        options: {
          // The maximum size of the cache
          max: 32767,
          // Update to the current time whenever it is retrieved from cache, causing it to not expire
          updateAgeOnGet: false,
        },
      },
      strategy: {
        debug: true,
        enableEtag: true,
        hitpass: false,
        logs: true,
        contentTypes: [
          {
            contentType: "api::about.about",
            hitpass: false,
            maxAge: 18000
          },
        ],
      },
    },
  },
});
