import { TaskGroupsPresenter } from "../../presentation/TaskGroupsPresenter";
import { TasksGroupRepository } from "../../data/TasksGroupRepository";

/**
 * @description Сборка всех сущностей
 */
export function taskGroupsProvider() {
  const tasksGroupPresenter = new TaskGroupsPresenter(new TasksGroupRepository());
  return tasksGroupPresenter;
}
