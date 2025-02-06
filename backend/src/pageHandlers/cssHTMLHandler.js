import * as pathHandler from "../pathHandler.js";
import * as fileServer from "../fileServer.js";


export const GetCSSFile = (req, res) => {
    return fileServer.ServeFile(req, res, pathHandler.GetCssPath("singlePage.css"));
}

export const GetScriptFile = (req, res) => {
    return fileServer.ServeFile(req, res, pathHandler.GetScriptPath("singlePage.js"));
}