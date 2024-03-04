/** Database setup for BizTime. */
require('dotenv').config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-biztime";

const PORT = +process.env.PORT || 3002;

// Use dev database, testing database, or via env var, production database
// function getDatabaseUri() {
//   return (process.env.NODE_ENV === "test")
//       ? "postgresql:///biztime_test"
//       : process.env.DATABASE_URL || "postgresql:///biztime";
// }

let DB_URI;

if (process.env.NODE_ENV === "test"){
  DB_URI = "biztime_test";  
} else{
  DB_URI = "biztime";
}

console.log("Biztime:".green);
console.log("PORT:".yellow, PORT.toString());
console.log("Database:".yellow, DB_URI);
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI,
};