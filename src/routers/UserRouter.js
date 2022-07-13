import express from "express";
import {
  postEdit,
  getEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getChangepassword,
  postChangepassword,
} from "../controllers/userController";

import {
  protectorMiddleware,
  publicOnlyMiddleware,
  avatarUploads,
} from "../middlewares";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUploads.single("avatar"), postEdit);

userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangepassword)
  .post(postChangepassword);

userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/logout", protectorMiddleware, logout);
userRouter.get("/:id", see);// GET과 POST 요청을 처리하는/add URL에 대한 라우트는 반드시 /:id 라우트 보다 위에 작성해야 합니다

export default userRouter;
