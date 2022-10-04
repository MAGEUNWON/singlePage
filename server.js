const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))
// middleware 설정. 
// __dirname을 빼도 되지만 포함하는게 정석. 
// 'static'으로 시작되는 경로로 접속시 frontend/static이 기본 고정 경로가 됨.

app.get("/*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
// single page 이기 때문에 모든 경로에서 index.html을 불러옴

app.listen(process.env.PORT || 5000, ()=>{
  console.log("Server running...")
})