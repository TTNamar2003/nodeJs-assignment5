import { TaskModel } from "../models/taskModel.js";
const taskmodel = new TaskModel();

export class TaskService {
  async getTasks() {
    return await taskmodel.getAllTasks();
  }

  async addTask(title) {
    return await taskmodel.createTask(title);
  }

  async removeTask(id) {
    await taskmodel.deleteTask(id);
  }
}
