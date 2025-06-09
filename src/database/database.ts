import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbname = process.env.DBNAME || "bukuapi";
const dbuser = process.env.DBUSER || "root";
const dbpassword = process.env.DBPASSWORD || "";
const database = new Sequelize(dbname, dbuser, dbpassword, {
  dialect: "mysql"
})

database.authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((error: any) => console.error(`Error creating database: ${error.message}`))

export default database;