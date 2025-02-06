

export const ServeFile = (req, res, filepath) => {
    res.sendFile(filepath);
}