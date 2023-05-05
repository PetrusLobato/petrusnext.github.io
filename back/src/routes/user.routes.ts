import { Router } from "express";
import { inspectTokenMiddlewares } from "../validations/token.validations";
import { userExistsValidation } from "../validations/user.exists.validations";
import { listAllUsersController } from "../controllers/user/list.all.user.controller";
import { listUserController } from "../controllers/user/list.user.controller";
import { updateUserController } from "../controllers/user/update.user.controller";
import { deleteUsersController } from "../controllers/user/delete.user.controller";




const userRoutes = Router();

userRoutes.get("/user", inspectTokenMiddlewares, listAllUsersController );
userRoutes.get("/user/:id", inspectTokenMiddlewares, userExistsValidation, listUserController);
userRoutes.patch("/:id", inspectTokenMiddlewares, userExistsValidation, updateUserController);
userRoutes.delete("/:id", inspectTokenMiddlewares, userExistsValidation, deleteUsersController);

export default userRoutes;