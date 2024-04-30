const express = require("express")
const api = require("./routes/api"); //api.jsを読み込む
const app = express();
const port = 3000;

app.use(express.static("public")); //頻繁に使用する関数の指定

app.use("/api", api);

app.get("/", (req, res, next) => {
    res.end("Top Page");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});