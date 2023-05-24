var express = require("express")
var scr = require("api-dylux")
var app = express()

var HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/xnxxsearch", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
    const result = await scr.xnxxSearch(query)
    res.json({
        result
    })
})
app.get("/xnxxdl", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"masukkan url"})
    const result = await scr.xnxxdl(url)
    res.json({
        result
    })
})
app.get("tiktok", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"masukkan url"})
    const result = await scr.tiktok(url)
    res.json({
        result
    })
})

app.get("/", (req, res, next) => {
    res.json({"message":"APA???"})
});
