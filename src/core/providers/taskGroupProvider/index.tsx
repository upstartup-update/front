import { TaskModel } from "../../presentation/TaskModel";
import { TasksGroupStore } from "../../stores/TasksStore";

/**
 * @description Сборка всех сущностей
 */
export function taskGroupsProvider() {
  return new TaskModel(new TasksGroupStore());
}
