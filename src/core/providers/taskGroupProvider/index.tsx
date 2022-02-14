import { TaskGroupsPresenter } from "../../presentation/TaskGroupsPresenter";
import { TasksGroupStorage } from "../../stores/TasksGroupStore";

/**
 * @description Сборка всех сущностей
 */
export function taskGroupsProvider() {
  const tasksGroupPresenter = new TaskGroupsPresenter(new TasksGroupStorage());
  return tasksGroupPresenter;
}
