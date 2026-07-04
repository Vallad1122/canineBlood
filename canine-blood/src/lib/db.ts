import mysql from "mysql2/promise";

const requiredEnv = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"] as const;
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  throw new Error(`Missing database environment variables: ${missingEnv.join(", ")}`);
}

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: "root",
  password: "8143123@Tai",
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});
