import * as dbHandler from "./db/dbHandler.js"


export const RegisterRoutes = (server) => {


    server.get("/", async (req, res) => {

        try {
            const users = await dbHandler.GetAllUsers();
            res.json({users});
        }
        catch (error){
            res.json({"error":"Action failed"})
            return;
        }

        
    });

    server.post("/adduser", async (req, res) => {
        const user = {firstName : req.body.firstName, lastName : req.body.lastName, email : req.body.email};


        try{
            await dbHandler.AddUser(user);
            
        }
        catch (error){
            res.status(500).send();
            return;
        }


        res.status(204).send();
    });

    server.delete("/deleteuser/:id", async (req, res) => {
        const userID = req.params.id;

        try{
            await dbHandler.DeleteUser(userID);
        }
        catch{
            res.status(500).send();
            return;
        }

        res.status(204).send();

    })
}


