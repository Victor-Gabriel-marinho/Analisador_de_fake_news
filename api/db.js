import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwe123",
    database: "fake_analysis",   
});