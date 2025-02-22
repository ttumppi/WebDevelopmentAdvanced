import * as dbHandler from "./db/dbHandler.js"


export const RegisterRoutes = (server) => {


    server.get("/", async (req, res) => {
        const users = await dbHandler.GetAllUsers();


        res.render("homepage", {users});
    });

    server.post("/adduser", async (req, res) => {
        const user = {firstName : req.body.first_name, lastName : req.body.last_name, email : req.body.email};

        await dbHandler.AddUser(user);


        res.redirect("/");
    });

    server.post("/deleteuser/:id", async (req, res) => {
        const userID = req.params.id;

        await dbHandler.DeleteUser(userID);

        res.redirect("/");
    })
}


