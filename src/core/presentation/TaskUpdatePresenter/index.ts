import { PresenterObservable } from "../common/PresenterObservable";
import { TaskModel } from "../../entities/TaskModel";

type TaskUpdateState = { taskModel: TaskModel };

export class TaskUpdatePresenter extends PresenterObservable<TaskUpdateState> {
  constructor() {
    super({ taskModel: new TaskModel("") });
  }

  setTaskData(taskModel: TaskModel) {
    this.changeState((state) => ({
      taskModel: Object.assign(state.taskModel, taskModel),
    }));
  }

  setTitle = (title: string) => {
    this.changeState((state) => ({
      taskModel: Object.assign(state.taskModel, { title }),
    }));
  };

  setDescription = (description: string) => {
    this.changeState((state) => ({
      taskModel: Object.assign(state.taskModel, { description }),
    }));
  };
}
