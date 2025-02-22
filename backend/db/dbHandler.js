import * as sqlDB from "./db.js"

import fs from "fs"

let db = null;

const insertUsersQ = "INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)";
const checkUserQ = "SELECT email FROM users WHERE email = ?";
const GetUsersQ = "SELECT * FROM users";
const DeleteUserQ = "DELETE FROM users WHERE id = ?";
const UpdateUserQ = "UPDATE users SET first_name = ?, last_name = ?, email = ?, WHERE id = ?";

const Initialize = () => {
    db = sqlDB.Start();

    db.exec(fs.readFileSync("/home/admin/advancedNode/WebDevelopmentAdvanced/backend/db/init.sql", "utf8"), (err) => {

        if (err){
            throw new Error("Database failed to initialize");
        }
        
    });
}

Initialize();




//DB actions below

export const AddUser = (user) => {

    
    if (!user.firstName || !user.lastName || !user.email){
        throw new Error("invalid query parameters");
    }

    if (UserExists(user.email)){
        return;
    }

    db.run(insertUsersQ, [user.firstName, user.lastName, user.email], (error) => {

        if (error){
            throw new Error("Failed to insert user");
        }
        
    });
}

const UserExists = (email) => {

    let qRow;

    db.get(checkUserQ, [email], (error, row) => {

        if (error){
            throw new Error("Something went wrong with querying user existence");
        }

        qRow = row;
    });

    return qRow.email == email;


}

export const GetAllUsers = () => {

    let qRows;
    db.all(GetUsersQ, [], (error, rows) => {
        if (error){
            throw new Error("Something went wrong with querying existing users");
        }

        qRows = rows;
    });

    return qRows;
}

export const DeleteUser = (id) => {

    db.run(DeleteUserQ, [id], (error) => {

        if (error){
            throw new Error("Something went wrong with deleting user");
        }
    })
}

export const UpdateUser = (id, user) => {

    if (!UserExists(user.email)){
        return;
    }

    db.run(UpdateUserQ, [user.firstName, user.lastName, user.email, id],
        (error) => {

            if (error){
                throw new Error("Something went wrong with updating the user info");
            }
        }
     )
}