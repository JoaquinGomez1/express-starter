import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose, { ConnectOptions } from "mongoose";

import UserRouter from "./routes/api/users/UserRouter";
import PostRouter from "./routes/api/posts/PostRouter";
import { MONGO_URI, options } from "./config/mongoose.config";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    // Settings
    this.app.set("port", process.env.PORT || 3080);
    this.setMiddlewares();

    // Conectar mongoose
    mongoose
      .connect(MONGO_URI || process.env.MONGODB_URL!, options as ConnectOptions)
      .then((_) => console.log("Base contectada"))
      .catch((err) => console.log(err));
  }

  private setMiddlewares(): void {
    // Nota: El orden de los middlewares SI importa
    this.app.use(express.json()); // <- Antiguo bodyparser
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    // Express Session (autenticación)
    this.app.use(
      session({ secret: "einescecret", resave: true, saveUninitialized: true })
    );
  }

  public routes(): void {
    this.app.use("/api/posts", PostRouter);
    this.app.use("/api/users", UserRouter);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server iniciado en el puerto: ", this.app.get("port"));
    });
  }
}

export { Server };
