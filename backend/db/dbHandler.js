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

export const AddUser = async (user) => {

    
    if (!user.firstName || !user.lastName || !user.email){
        throw new Error("invalid query parameters");
    }

    if ((await UserExists(user.email))){
        return;
    }

    await db.run(insertUsersQ, [user.firstName, user.lastName, user.email], (error) => {

        if (error){
            throw new Error("Failed to insert user");
        }
        
    });
}

const UserExists = async (email) => {


    const qRow = await new Promise( (resolve, reject) => {
        
        db.get(checkUserQ, [email], (error, row) => {

            if (error){
                reject(new Error("Something went wrong with querying user existence"));
                return;
            }

            resolve(row);
        })
    });


    return qRow && qRow.email == email;


}

export const GetAllUsers = async () => {

    const qRows = await new Promise((resolve, reject) => {
        db.all(GetUsersQ, [], (error, rows) => {
            if (error){
                reject(new Error("Something went wrong with querying existing users"));
            }

            resolve(rows);
        });
    });

    return qRows;
}

export const DeleteUser = async (id) => {

    await db.run(DeleteUserQ, [id], (error) => {

        if (error){
            throw new Error("Something went wrong with deleting user");
        }
    })
}

export const UpdateUser = async (id, user) => {

    if (!(await UserExists(user.email))){
        return;
    }

    await db.run(UpdateUserQ, [user.firstName, user.lastName, user.email, id],
        (error) => {

            if (error){
                throw new Error("Something went wrong with updating the user info");
            }
        }
     )
}