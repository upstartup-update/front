import { TasksGroupStorage } from "../../stores/TasksGroupStore";
import { PresenterObservable } from "../common/PresenterObservable";
import { TaskGroupsSate } from "./state";

/**
 * @description Отвечает за связь данных и представления,
 * связывает модели списков задач с представлением.
 * Тянет данные из репозитория и передает запросы к репозиторию
 */
export class TaskGroupsPresenter extends PresenterObservable<TaskGroupsSate> {
  constructor(private tasksGroupRepository: TasksGroupStorage) {
    super({ taskGroups: [] });

    this.tasksGroupRepository.loadTasksGroup();

    //todo убрать
    this.createTaskGroup("hello");
  }

  createTaskGroup = (title: string) => {
    if (title === "") return;

    const taskGroups = this.tasksGroupRepository.createTaskGroup(title);
    this.changeState(() => ({ taskGroups }));
  };
}
