import { Request, Response, Router } from "express";
import UserModel from "../../../models/UserModel";

class UserRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  async getUser(req: Request, res: Response): Promise<void> {
    const user = await UserModel.findById(req.params.id).populate("posts");
    res.json(user);
  }

  async loginUser(req: Request, res: Response): Promise<void> {
    const user = new UserModel(req.body);
    res.json(user);
  }

  async registerUser(req: Request, res: Response): Promise<void> {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json({ status: 200, newUser });
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await UserModel.findByIdAndRemove(id);
    res.json(user);
  }

  routes() {
    this.router.get("/:id", this.getUser);
    this.router.post("/", this.registerUser);
    this.router.put("/:id", this.updateUser);
    this.router.delete("/:id", this.deleteUser);
  }
}

const userRouter = new UserRouter();
export default userRouter.router;
