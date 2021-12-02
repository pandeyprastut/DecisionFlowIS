const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:60243';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_configuration",
      "/.well-known",
      "/Identity",
      "/connect",
      "/ApplyDatabaseMigrations",
      "/_framework",
      "/api/ApplicationFilter/GetAllFilters",
      "/api/DeliverableView/GetAllGridDataByFilter",
      "/api/DeliverableView/GetInventoryViewDataByFilter"
   ],
    target: target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
