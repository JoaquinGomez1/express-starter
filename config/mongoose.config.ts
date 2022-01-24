const userDB = process.env.userDB;
const passwordDB = process.env.userPassword;

const MONGO_URI = `mongodb+srv://${userDB}:${passwordDB}@cluster0.mkrtm.mongodb.net/Cluster0?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export { options, MONGO_URI };
