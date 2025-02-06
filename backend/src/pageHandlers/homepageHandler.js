import * as pathHandler from "../pathHandler.js";
import * as fileServer from "../fileServer.js";

export const GetHomePage = (req, res) => {

    fileServer.ServeFile(req, res, pathHandler.GetHtmlPath("singlePage.html"));
}