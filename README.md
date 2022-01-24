# Express Starter kit

This project is meant to be used with MongoDB.
The use of the following packages is recomended but not mandatory:

- express-session
- mongoose
- nodemon

## Folder structure

```
src
├───build -> Transpiled javascript files
├───config -> Config and setup files
├───interfaces -> Typescript types and interfaces. Use this folder to declare all your typings
├───middlewares
├───models -> Mongoose models
|---common -> Utility functions and common classes
├───routes
│    └───api -> This is where all api router classes should be
└───services -> Handle bussines logic
```

### Recomendations

- Use Router classes to keep your endpoints organized
- Keep the app.ts file as clean as posible. Only use it as an entrypoint for your appication
- Use services to handle all of your business logic.
- Use router classes only to pass data to the service
