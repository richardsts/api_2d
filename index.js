let express = require("express");
let app = express();

app.use(express.static("src"));

app.listen(80, () => {
    console.log("Listening...");
})