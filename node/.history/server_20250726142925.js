const express = resquire("express");

const app = express();
app.use("", (req, res) => {
  console.log("hell");
});

app.listen(port, () => {});
