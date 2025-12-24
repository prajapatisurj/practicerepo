const express = resquire("express");

const app = express();
PORT=8000;
app.use("", (req, res) => {
  console.log("hell");
});

app.listen(PORT, () => {
    console.log(`server is listion is ${PORT}`)
});
