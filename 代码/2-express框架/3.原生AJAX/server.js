const express = require("express");

const app = express();

app.get("/server", (request, response) => {
  // 设置响应头，允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  response.send("HELLO AJAX GET");
});

// 自定义奇请求头
app.all("/server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  response.send("HELLO AJAX POST");
});

// 自定义奇请求头
app.all("/json-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "xxx",
  };
  response.send(JSON.stringify(data));
});

// IE缓存
app.all("/ie", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("HELLO IE");
});

// 延时响应
app.get("/delay", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    response.send("延时响应");
  }, 3000);
});

app.listen(8000, () => {
  console.log("服务已启动,8000 端口监听中....");
});
