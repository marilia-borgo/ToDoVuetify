const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const config = require("./config");
const auth = require("./controllers/auth");

const YELLOW = "\x1b[33m%s\x1b[0m";
const WHITE = "\x1b[37m";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: config.ORIGIN_URL }));

app.post("/api/auth/login", auth.find);
app.post("/api/auth/signup", auth.find);

app.listen(config.PORT, () => {
  console.log(
    YELLOW,
    "🆙 JSON Server is running on port: " + config.PORT,
    WHITE
  );
});