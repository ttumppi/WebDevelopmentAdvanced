import path from "path";
const htmlFilesFolder = "html/";
const cssFilesFolder = "css/";
const scriptFilesFolder = "src/";

export const GetHtmlPath = (filePath) => {
    return path.resolve(htmlFilesFolder, filePath);
}

export const GetCssPath = (filePath) => {
    return path.resolve(cssFilesFolder, filePath);
}

export const GetScriptPath = (filePath) => {
    return path.resolve(scriptFilesFolder, filePath);
}
