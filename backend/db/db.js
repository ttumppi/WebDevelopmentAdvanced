import sqlite3 from "sqlite3"

export const Start = () => {
    return new sqlite3.Database("./db/database.db");
}