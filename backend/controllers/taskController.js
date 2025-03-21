import { TaskService } from "../services/taskService.js";
const taskService = new TaskService();

export async function getTasks(req, res) {
  const tasks = await taskService.getTasks();
  res.json(tasks);
}

export async function createTask(req, res) {
  const { title } = req.body;
  const task = await taskService.addTask(title);
  res.json(task);
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  await taskService.removeTask(Number(id));
  res.json({ message: "Task deleted" });
}
