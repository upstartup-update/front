import { TaskGroupModel } from "../../entities/TaskGroupModel";

/**
 *  @description Этот стор отвечает захранение списков задач и бизнес логику  (колонок)
 */
export class TasksGroupStorage {
  private taskGroups: TaskGroupModel[] = [];

  loadTasksGroup() {
    //todo api
    this.taskGroups = [];
  }

  getTaskGroup() {
    return this.taskGroups;
  }

  createTaskGroup(title: string) {
    this.taskGroups.push(new TaskGroupModel(title));
    return this.taskGroups;
  }
}
