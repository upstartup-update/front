import { generateId } from "../../../utils/numberId";

export class TaskModel {
  id = generateId();

  constructor(public title: string) {}
}
