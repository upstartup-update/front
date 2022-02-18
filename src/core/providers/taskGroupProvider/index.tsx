import { TaskBloC } from "../../presentation/TaskBloC";
import { TasksGroupStore } from "../../stores/TasksStore";

/**
 * @description Сборка всех сущностей
 */
export function taskGroupsProvider() {
  const tasksGroupPresenter = new TaskBloC(new TasksGroupStore());
  return tasksGroupPresenter;
}
