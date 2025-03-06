import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import cors from "cors"

let server = null
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export const StartServer = () => {
    server.listen(PORT, () => {
        console.log(`Backend running on http://localhost:${PORT}`);
    });

}
export const CreateServer = () => {
    server = express();
    server.set("view engine", "ejs");
    server.use(express.static(path.join(__dirname, "public")));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cors());
    


    return server;
}

export const GetServerInstance = () => {
    return server;
}
