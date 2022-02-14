import { createContext, useMemo } from "react";
import { Div } from "@vkontakte/vkui";

import { taskGroupsProvider } from "../../core/providers/taskGroupProvider";
import { usePresenterObservableState } from "../../hooks/usePlocState";
import TasksGroup from "../../components/TasksGroups";
import CreateTaskGroup from "./CreateTaskGroup";

function Board() {
  const tasksGroupPresenter = useMemo(taskGroupsProvider, []);
  const tasksGroupPresenterState = usePresenterObservableState(tasksGroupPresenter);

  return (
    <Div style={{ display: "flex" }}>
      {tasksGroupPresenterState.taskGroups.map((task) => (
        <div style={{ paddingRight: 5, paddingLeft: 5 }}>
          <TasksGroup
            task={task}
            addTask={(title) => tasksGroupPresenter.createTask(title, task.id)}
          />
        </div>
      ))}

      <CreateTaskGroup onCreate={tasksGroupPresenter.createTaskGroup} />
    </Div>
  );
}
export default Board;
