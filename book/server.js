const express = require("express")
const api = require("./routes/api"); //api.jsを読み込む
const csrf = require("./routes/csrf"); 
const crypto = require("crypto");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public", {
    setHeaders: (res, path, stat) => {
        res.header("X-Frame-Options", "SAMEORIGIN");
    }
}));

app.use("/api", api);
app.use("/csrf", csrf);

app.get("/", (req, res, next) => {
    res.end("Top Page");
});

app.get("/csp", (req, res) => {
    const nonceValue = crypto.randomBytes(16).toString("base64"); //毎回ランダムな文字列生成

    res.header("Content-Security-Policy",
     `script-src 'nonce-${nonceValue}' 'strict-dynamic';` +
     "object-src 'none';" +
     "base-uri 'none';" +
     "require-trusted-types-for 'script';"
    ); // 生成した値をCSPヘッダに指定

    res.render("csp", { nonce: nonceValue }); //生成したnonce値をHTMLに渡す
});

app.use(express.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
    console.log(req.body);
    res.send("アカウント登録しました");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});