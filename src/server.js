import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev")

const handleHome = (req, res, next) =>{
 return res.send("I stil love you")
}

const login = (req, res) => {
  return res.send("login");
};

app.use(logger)


app.get("/", handleHome);
app.get("/login", login)


const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);