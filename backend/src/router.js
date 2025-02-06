import * as homepageHandler from "./pageHandlers/homepageHandler.js"
import * as cssHTMLHandler from "./pageHandlers/cssHTMLHandler.js"


export const RegisterRoutes = (server) => {
    server.get("/", (req, res) => {
        return homepageHandler.GetHomePage(req, res);
    });

    server.get("/singlepagecss", (req, res) => {
        return cssHTMLHandler.GetCSSFile(req, res);
    });

    server.get("/singlepagescript", (req, res) => {
        return cssHTMLHandler.GetScriptFile(req, res);
    });

    
}


