import { generateId } from "../../../utils/numberId";

export class TaskModel {
  id = generateId();

  public description = "";

  constructor(public title: string) {}
}
