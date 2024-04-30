import config from "./src/utils/config.js";
import app from "./src/index.js";
import sequelize from "./src/config/database.js";
import { log } from "./src/utils/logger.js";
const { PORT } = config;

sequelize
  .authenticate()
  .then(() => {
    log("Connection success");
    return sequelize.sync({ logging: false });
  })
  .then(() => {
    log("Sync models");
    app.listen(PORT, () => {
      log("Listening on port: " + PORT);
    });
  })
  .catch((error) => {
    console.error("Connection fail", error);
  });
