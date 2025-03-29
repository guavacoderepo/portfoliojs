import mysql from "mysql2/promise";
// import * as table from "../helpers/tableQueries.js";



console.log("DB Host:", process.env.DB_HOST);
console.log("DB User:", process.env.DB_USER);
console.log("DB Name:", process.env.DB_DBNAME);
console.log("DB Port:", process.env.DB_PORT);


const sqlconnect = await mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DBNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
});

export const sqlQuery = async (query, values) => {
  return await sqlconnect.query(query, values);
};

export const databaseconnect = async () => {
  await sqlconnect.connect().then(async () => {
    try {
      // await sqlQuery(table.userTable);
      // await sqlQuery(table.projectsTable);
      // await sqlQuery(table.skillsTable);
      // await sqlQuery(table.experienceTable);
      // await sqlQuery(table.documentsTable);
      // await sqlQuery(table.projectSkillsTable);
      // await sqlQuery(table.activitiesTable);
      // await sqlQuery(table.educationTable);

      console.log("Database setup successful!");
    } catch (err) {
      console.error("Error during database setup:", err.stack);
    }
  });
};
