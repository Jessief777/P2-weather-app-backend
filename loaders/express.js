const express = require("express");
//const cors = require("cors");
const apiRouter = require("../app/routes/v1/api");
const config = require("../app/config");

const startServer = () => {
  ////////////////////////////////////////
  // 1. init express
  // 2. listen to the server
  // 3. return witch can use later
  ///////////////////////////////////////

  const application = express();
  application.listen(config.port, (err) => {
    if (err) {
      process.exit(1);
    }
    console.log("SERVER STARTED");
  });
  return application;
};

module.exports = () => {
  ////////////////////////////////////////
  // 1. call the function above
  // 2. cors
  // 3. return witch can use later
  // 4. change to json
  // 5. router
  ///////////////////////////////////////
  const app = startServer();
  //app.use(cors());
  app.use(express.json());
  app.use(config.api.prefix, apiRouter);
  return app;
};
