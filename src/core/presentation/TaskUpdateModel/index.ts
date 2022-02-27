import { action, makeObservable, observable } from "mobx";

import { Task } from "../../entities/Task";

export class TaskUpdateModel {
  @observable
  title = "";
  @observable
  description = "";

  constructor() {
    makeObservable(this);
  }

  @action
  setTaskData(taskModel: Task) {
    this.title = taskModel.title;
    this.description = taskModel.description;
  }

  @action
  setTitle = (title: string) => {
    this.title = title;
  };

  @action
  setDescription = (description: string) => {
    this.description = description;
  };

  getModelData() {
    return {
      title: this.title,
      description: this.description,
    };
  }
}
