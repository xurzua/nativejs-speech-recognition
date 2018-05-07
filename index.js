const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.listen(PORT, () =>
  console.log(`SpeechRecognition demo app is listening on port ${PORT}!`)
);
