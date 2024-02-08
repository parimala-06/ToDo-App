import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./routes/routes.js";
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';


dotenv.config();

const app = express();
let port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middleware
app.use(express.json());
app.use(cors({ 
  origin: ['http://localhost:3000', 'https://todo-vite-server.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use("/api", router);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

  app.use(express.static(path.resolve(__dirname, '../client/dist')));

  app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})