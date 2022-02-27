import { action, makeObservable, observable } from "mobx";

import { generateId } from "../../../utils/numberId";
import { Task } from "../Task";

/**
 *  @description Модель списка задач (колонка), простой объект со свойствами, хранит в себе задачи
 */
export class TaskGroupModel {
  id = generateId();

  @observable
  tasks: Task[] = [];

  constructor(public title: string) {
    this.title = title;
    makeObservable(this);
  }

  changeName(title: string) {
    this.title = title;
  }

  @action
  addTask(title: string, id: number) {
    this.tasks.push({ title, description: "", id });
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }
}
