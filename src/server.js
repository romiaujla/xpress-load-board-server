require("dotenv").config();
const app = require("./app");
const { DB_URL, PORT } = require("./config");
const { errorHandler } = require("./middleware/error-handler");

const knex = require("knex");
const db = knex({
  client: "pg",
  connection: DB_URL
});

app.set("db", db);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}`);
});
