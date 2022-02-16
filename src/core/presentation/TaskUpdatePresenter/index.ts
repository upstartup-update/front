import { PresenterObservable } from "../common/PresenterObservable";
import { TaskModel } from "../../entities/TaskModel";
import { TaskUpdateState } from "./type";

export class TaskUpdatePresenter extends PresenterObservable<TaskUpdateState> {
  constructor() {
    super({ title: "", description: "" });
  }

  setTaskData(taskModel: TaskModel) {
    this.changeState((state) => ({ description: taskModel.description, title: taskModel.title }));
  }

  setTitle = (title: string) => {
    this.changeState((state) => ({ ...state, title }));
  };

  setDescription = (description: string) => {
    this.changeState((state) => ({ ...state, description }));
  };
}
