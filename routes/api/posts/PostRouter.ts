import { Router, Request, Response } from "express";
import PostService from "../../../services/post/PostService";

class PostRouter {
  router: Router;
  private postService: PostService = new PostService();

  constructor() {
    this.router = Router();
    this.routes();
  }

  async getPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await this.postService.getPosts();
      res.json({ posts });
    } catch (ex) {
      res.status(404).json({ ex });
    }
  }

  async getPost(req: Request, res: Response): Promise<void> {
    const Post = await this.postService.getPost(req.params.id);
    res.json(Post);
  }

  async createPost(req: Request, res: Response): Promise<void> {
    try {
      const newPost = await this.postService.createPost(req.body);
      res.json({ status: 200, newPost });
    } catch (err: any) {
      res.status(400).json(err?.message || err);
    }
  }

  async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await this.postService.updatePost(req.body);
      res.json({ status: 200, updatedPost });
    } catch (err: any) {
      res.status(400).json(err?.message || err);
    }
  }

  async deletePost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await this.postService.deletePost(req.body._id);
      res.json({ status: 200, updatedPost });
    } catch (err: any) {
      res.status(400).json(err?.message || err);
    }
  }

  routes() {
    // Rutas
    this.router.get("/", this.getPosts);
    this.router.get("/:id", this.getPost);
    this.router.post("/", this.createPost);
    this.router.put("/:id", this.updatePost);
    this.router.delete("/:id", this.deletePost);
  }
}

const postRouter = new PostRouter();
export default postRouter.router;
