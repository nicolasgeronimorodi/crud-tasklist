import { Router } from "express";

import {
  renderTasks,
  addTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", addTask);

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/tasks/:id/toggleDone/", toggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);



export default router;
