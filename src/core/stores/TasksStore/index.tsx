import { TaskGroupModel } from "../../entities/TaskGroupModel";
import { generateId } from "../../../utils/numberId";

/**
 *  @description Этот стор отвечает захранение списков задач и бизнес логику  (колонок)
 */
export class TasksGroupStore {
  private taskGroups: TaskGroupModel[] = [];

  loadTasksGroup() {
    //todo api
    this.taskGroups = [];
  }

  createTaskGroup(title: string) {
    this.taskGroups.push(new TaskGroupModel(title));
    return this.taskGroups;
  }

  createTask(title: string, taskGroupId: number) {
    const foundedTaskGroup = this.taskGroups.find((taskGroup) => taskGroup.id === taskGroupId);
    if (!foundedTaskGroup) return this.taskGroups;
    foundedTaskGroup.addTask(title, generateId());

    return this.taskGroups;
  }
}
