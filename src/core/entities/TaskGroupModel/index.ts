/**
 *  @description Модель списка задач (колонка), простой объект со свойствами, хранит в себе задачи
 */
export class TaskGroupModel {
  private tasks = [];

  constructor(public title: string) {
    this.title = title;
  }

  changeName(title: string) {
    this.title = title;
  }
}
