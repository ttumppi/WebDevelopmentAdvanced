import * as sqlDB from "./db.js"

import fs from "fs"

let db = null;

const Initialize = () => {
    db = sqlDB.Start();

    db.exec(fs.readFileSync("/home/admin/advancedNode/WebDevelopmentAdvanced/backend/db/init.sql", "utf8"), (err) => {

        if (err){
            throw new Error("Database failed to initialize");
        }
        
    });
}

Initialize();