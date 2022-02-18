import { TasksGroupStore } from "../../stores/TasksStore";
import { BLoC } from "../common/BLoC";
import { TaskGroupsSate } from "./state";
import { Task } from "../../entities/Task";

/**
 * @description Отвечает за связь данных и представления,
 * связывает модели списков задач с представлением.
 * Тянет данные из репозитория и передает запросы к репозиторию
 */
export class TaskBloC extends BLoC<TaskGroupsSate> {
  constructor(private tasksGroupStore: TasksGroupStore) {
    super({ taskGroups: [] });

    this.tasksGroupStore.loadTasksGroup();

    //todo убрать
    this.createTaskGroup("hello");
  }

  createTaskGroup = (title: string) => {
    if (title === "") return;
    this.changeState(() => ({ taskGroups: this.tasksGroupStore.createTaskGroup(title) }));
  };

  createTask = (title: string, id: number) => {
    this.changeState(() => ({ taskGroups: this.tasksGroupStore.createTask(title, id) }));
  };

  //todo пересмотреть это
  setTask = (taskId: number, updateTaskData: Omit<Task, "id">) => {
    const foundTask = this.findTaskById(taskId);
    if (!foundTask) return;

    Object.assign(foundTask, updateTaskData);

    this.changeState(({ taskGroups }) => ({ taskGroups }));
  };

  findTaskGroupById(taskGroupsId: number) {
    return this.state.taskGroups.find((taskGroup) =>
      taskGroup.tasks.find((task) => task.id === taskGroupsId),
    );
  }

  findTaskById(taskId: number) {
    return this.findTaskGroupById(taskId)?.getTaskById(taskId);
  }
}
