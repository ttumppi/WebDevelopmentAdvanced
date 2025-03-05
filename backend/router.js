import * as dbHandler from "./db/dbHandler.js"


export const RegisterRoutes = (server) => {


    server.get("/", async (req, res) => {

        
        try {
            const users = await dbHandler.GetAllUsers();
            res.json({users});
        }
        catch (error){
            res.json({"error":"Action failed"})
        }

        
    });

    server.post("/adduser", async (req, res) => {
        const user = {firstName : req.body.first_name, lastName : req.body.last_name, email : req.body.email};

        console.log(user);

        try{
            await dbHandler.AddUser(user);
        }
        catch (error){
            res.status(500).send();
        }


        res.status(204).send();
    });

    server.post("/deleteuser/:id", async (req, res) => {
        const userID = req.params.id;

        try{
            await dbHandler.DeleteUser(userID);
        }
        catch{
            res.status(500).send();
        }

        res.status(204).send();
    })
}


