/** Server startup for BizTime. */
const app = require("./app");
const {PORT} = require("./config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});