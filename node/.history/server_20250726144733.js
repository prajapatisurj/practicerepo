const express = require("express");

const app = express();
PORT=8000;
app.use("", (req, res) => {
  console.log("hello");
});

app.listen(PORT, () => {
    console.log(`server is listion is ${PORT}`)
});
