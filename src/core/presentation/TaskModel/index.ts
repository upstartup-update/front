import { action, makeObservable, observable } from "mobx";

import { TasksGroupStore } from "../../stores/TasksStore";
import { TaskGroupModel } from "../../entities/TaskGroupModel";
import { Task } from "../../entities/Task";

/**
 * @description Отвечает за связь данных и представления,
 * связывает модели списков задач с представлением.
 * Тянет данные из репозитория и передает запросы к репозиторию
 */
export class TaskModel {
  @observable.shallow
  taskGroups: TaskGroupModel[] = [];

  constructor(private tasksGroupStore: TasksGroupStore) {
    this.tasksGroupStore.loadTasksGroup();
    makeObservable(this);

    //todo убрать
    this.createTaskGroup("hello");
  }

  @action
  createTaskGroup = (title: string) => {
    if (title === "") return;
    this.taskGroups = this.tasksGroupStore.createTaskGroup(title);
  };

  @action
  createTask = (title: string, id: number) => {
    if (title === "") return;
    this.taskGroups = this.tasksGroupStore.createTask(title, id);
  };

  findTaskGroupById(taskGroupsId: number) {
    return this.taskGroups.find((taskGroup) =>
      taskGroup.tasks.find((task) => task.id === taskGroupsId),
    );
  }

  @action
  setTask = (taskId: number, updateTaskData: Omit<Task, "id">) => {
    const foundTask = this.findTaskById(taskId);
    if (!foundTask) return;

    Object.assign(foundTask, updateTaskData);

    this.taskGroups = [...this.taskGroups];
  };

  findTaskById(taskId: number) {
    return this.findTaskGroupById(taskId)?.getTaskById(taskId);
  }
}
