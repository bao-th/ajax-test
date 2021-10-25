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

//JSONP
app.all("/jsonp-server", (request, response) => {
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
});

//cors
app.all("/cors-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Method", "*");
  // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  response.send("hello CORS");
});

app.listen(8000, () => {
  console.log("服务已启动,8000 端口监听中....");
});
