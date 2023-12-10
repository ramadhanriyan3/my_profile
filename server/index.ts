import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import path from "path";
const cors = require("cors");
const carRouter = require("./../src/routes/carRoutes");
const userRouter = require("./../src/routes/userRoutes");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load(path.resolve(__dirname, "../openapi.yaml"));

const PORT = 2700;

// database conector
const app: Express = express();
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "challenge_7",
    user: "postgres",
    password: "kalianda23",
  },
});
Model.knex(knexInstance);
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// sepatation of concern untuk aplikasi router
app.use("/cars", carRouter);
app.use("/", userRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`lintening to port ${PORT}`);
});
