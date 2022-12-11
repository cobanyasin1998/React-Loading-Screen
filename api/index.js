const express = require("express");

const { user, videos } = require("./fakedata");

const app = express();

app.use(express.json());

app.get("/api/user/1", (req, res) => {
  res.json(user);
});
app.get("/api/videos", (req, res) => {
  setTimeout(function () {
    res.json(videos);
  }, 4000);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
