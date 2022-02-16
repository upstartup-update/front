import { TasksGroupStore } from "../../stores/TasksStore";
import { PresenterObservable } from "../common/PresenterObservable";
import { TaskGroupsSate } from "./state";
import { TaskModel } from "../../entities/TaskModel";
import { TaskUpdateState } from "../TaskUpdatePresenter/type";

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
  setTask = (id: number, updateTaskData: TaskUpdateState) => {
    const foundTaskGroup = this.state.taskGroups.find((taskGroup) =>
      taskGroup.tasks.find((task) => task.id === id),
    );

    if (!foundTaskGroup) return;

    const foundTask = foundTaskGroup.tasks.find((task) => task.id === id);
    if (!foundTask) return;

    Object.assign(foundTask, updateTaskData);

    this.changeState(({ taskGroups }) => ({ taskGroups }));
  };
}
