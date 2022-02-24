import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../entities/Task";
import { createTaskAction, createTaskGroupAction } from "./actions";
import { store } from "../index";
import { generateId } from "../../../utils/numberId";

interface TaskGroup {
  id: string;
  title: string;
  tasks: Task[];
}

type TState = {
  taskGroups: TaskGroup[];
};

const initialState: TState = {
  taskGroups: [],
};

function findTaskGroupById(id: string) {
  return store.getState().tasks.taskGroups.find((taskGroup) => taskGroup.id === id);
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createTaskGroupAction, (state, { payload }) => {
        const foundTask = findTaskGroupById(payload.taskGroupId);
        if (!foundTask) return state;

        foundTask.tasks.push({ ...payload.taskData, id: generateId() });

        return state;
      })
      .addCase(createTaskAction, (state, { payload }) => {
        console.log("123");
        state.taskGroups.push({ tasks: [], id: String(generateId()), title: payload.title });

        return state;
      }),
});
