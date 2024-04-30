const express = require("express"); //Expressのルーティング用オブジェクトを作成する

const router = express.Router();

router.get("/", (req, res) => {
    res.setHeader("X-Timestamp", Date.now()); //ヘッダをレスポンスに追加する処理
    let message = req.query.message;
    const lang = req.headers["x-lang"]; //リクエストヘッダを受けとる処理

    if(message === "") {
        res.status(400);
        if (lang === "en") {
            message = "message is empty.";
        } else {
            message = "messageの値が空です";
        }
    }
    res.send({ message });
});

router.use(express.json());
router.post("/", (req, res) => {
    const body = req.body; //リクエストボディの格納場所
    console.log(body);
    res.end();
})

module.exports = router; //他のファイルから読み込めるようにエクスポートする