import { Response, Request } from "express";

function authMiddleware(req: Request, res: Response, next: any) {
  if (!req.session?.userId) {
    return res
      .status(401)
      .json({ message: "Access denied, must be logged in" });
  } else next();
}

export default authMiddleware;
