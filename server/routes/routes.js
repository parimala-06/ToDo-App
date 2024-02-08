import { Router} from "express";
import { deleteToDo, updateToDo, getToDo, saveToDo } from "../controller/controller.js";


const router = Router();

router.get("/get", getToDo);
router.post("/save",saveToDo);
router.put("/update/:id",updateToDo);
router.delete("/delete/:id",deleteToDo);

export default router;