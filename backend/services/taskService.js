import { TaskModel } from "../models/taskModel.js";
const taskmodel = new TaskModel();

export class TaskService {
  async getTasks() {
    try {
      return await taskmodel.getAllTasks();
    } catch (error) {
      throw error;
    }
  }

  async addTask(title) {
    try {
      return await taskmodel.createTask(title);
    } catch (error) {
      throw error;
    }
  }

  async removeTask(id) {
    try {
      await taskmodel.deleteTask(id);
    } catch (error) {
      throw error;
    }
  }
}
