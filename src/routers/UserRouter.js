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

userRouter.get("/logout", protectorMiddleware, logout);

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
userRouter.get("/:id", see);

export default userRouter;
