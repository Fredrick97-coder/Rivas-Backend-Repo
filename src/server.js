const express = require("express");
const cors = require("cors");

// servers
const app = express();
const port = 5000;

//middlewares

app.use(cors());
app.use(express.json());

//endpoints
app.get("/test", (req, res) => {
  res.send("Hello world");
});

app.listen(port, function () {
  console.log(`server is up and running at port, ${port}`);
});
