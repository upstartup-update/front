import { generateId } from "../../../utils/numberId";
import { Task } from "../Task";

/**
 *  @description Модель списка задач (колонка), простой объект со свойствами, хранит в себе задачи
 */
export class TaskGroupModel {
  id = generateId();

  tasks: Task[] = [];

  constructor(public title: string) {
    this.title = title;
  }

  changeName(title: string) {
    this.title = title;
  }

  addTask(title: string, id: number) {
    this.tasks.push({ title, description: "", id });
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }
}
