import { TaskGroupModel } from "../../entities/TaskGroupModel";

/**
 *  @description Этот репозиторий отвечает захранение списков задач (колонок)
 */
export class TasksGroupRepository {
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
