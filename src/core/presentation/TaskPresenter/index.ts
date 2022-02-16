import { TasksGroupStore } from "../../stores/TasksStore";
import { PresenterObservable } from "../common/PresenterObservable";
import { TaskGroupsSate } from "./state";
import { TaskModel } from "../../entities/TaskModel";

/**
 * @description Отвечает за связь данных и представления,
 * связывает модели списков задач с представлением.
 * Тянет данные из репозитория и передает запросы к репозиторию
 */
export class TaskGroupsPresenter extends PresenterObservable<TaskGroupsSate> {
  constructor(private tasksGroupStore: TasksGroupStore) {
    super({ taskGroups: [] });

    this.tasksGroupStore.loadTasksGroup();

    //todo убрать
    this.createTaskGroup("hello");
  }

  createTaskGroup = (title: string) => {
    if (title === "") return;

    const taskGroups = this.tasksGroupStore.createTaskGroup(title);
    this.changeState(() => ({ taskGroups }));
  };

  createTask = (title: string, id: number) => {
    const taskGroups = this.tasksGroupStore.createTask(title, id);
    this.changeState(() => ({ taskGroups }));
  };

  //todo пересмотреть это
  setTask = (newTask: TaskModel) => {
    const foundTask = this.state.taskGroups.find((taskGroup) =>
      taskGroup.tasks.find((task) => task.id === newTask.id),
    );
    if (!foundTask) return;

    const taskIndex = foundTask.tasks.findIndex((task) => task.id === newTask.id);
    foundTask.tasks[taskIndex] = newTask;

    this.changeState(({ taskGroups }) => ({ taskGroups }));
  };
}
