import db from "../config/db.js";

export class TaskModel {
  async getAllTasks() {
    const result = await db.query(
      "SELECT * FROM tasks ORDER BY created_at DESC"
    );
    return result.rows;
  }

  async createTask(title) {
    const result = await db.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
      [title]
    );
    return result.rows[0];
  }

  async deleteTask(id) {
    await db.query("DELETE FROM tasks WHERE id = $1", [id]);
  }
}
