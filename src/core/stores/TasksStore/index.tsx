import { TaskGroupModel } from "../../entities/TaskGroupModel";

/**
 *  @description Этот стор отвечает захранение списков задач и бизнес логику  (колонок)
 */
export class TasksGroupStore {
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

  createTask(title: string, id: number) {
    const foundedTaskGroup = this.taskGroups.find((taskGroup) => taskGroup.id === id);
    if (!foundedTaskGroup) return this.taskGroups;
    foundedTaskGroup.addTask(title);

    return this.taskGroups;
  }
}
