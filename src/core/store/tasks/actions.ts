import { createAction } from "@reduxjs/toolkit";

export const createTaskGroupAction = createAction(
  "tasks/createTaskGroup",
  (title: string, id: string) => {
    return {
      payload: {
        taskData: { title, description: "" },
        taskGroupId: id,
      },
    };
  },
);

export const createTaskAction = createAction("tasks/createTask", (title: string) => {
  return { payload: { title } };
});
