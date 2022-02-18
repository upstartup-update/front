import { BLoC } from "../common/BLoC";
import { Task } from "../../entities/Task";

export class TaskUpdateBLoC extends BLoC<Omit<Task, "id">> {
  constructor() {
    super({ title: "", description: "" });
  }

  setTaskData(taskModel: Task) {
    this.changeState(() => ({ description: taskModel.description, title: taskModel.title }));
  }

  setTitle = (title: string) => {
    this.changeState((state) => ({ ...state, title }));
  };

  setDescription = (description: string) => {
    this.changeState((state) => ({ ...state, description }));
  };
}
