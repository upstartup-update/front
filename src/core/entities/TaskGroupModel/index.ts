import { generateId } from "../../../utils/numberId";
import { TaskModel } from "../TaskModel";

/**
 *  @description Модель списка задач (колонка), простой объект со свойствами, хранит в себе задачи
 */
export class TaskGroupModel {
  id = generateId();

  tasks: TaskModel[] = [];

  constructor(public title: string) {
    this.title = title;
  }

  changeName(title: string) {
    this.title = title;
  }

  addTask(title: string) {
    this.tasks.push(new TaskModel(title));
  }
}
