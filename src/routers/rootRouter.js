import express from "express";
import {
  getjoin,
  postjoin,
  getlogin,
  postLogin,
} from "../controllers/userController";
import { search, home } from "../controllers/videoController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getjoin).post(postjoin);
rootRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getlogin)
  .post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
