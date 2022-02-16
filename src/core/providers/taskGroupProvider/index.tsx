import { TaskGroupsPresenter } from "../../presentation/TaskPresenter";
import { TasksGroupStore } from "../../stores/TasksStore";

/**
 * @description Сборка всех сущностей
 */
export function taskGroupsProvider() {
  const tasksGroupPresenter = new TaskGroupsPresenter(new TasksGroupStore());
  return tasksGroupPresenter;
}
