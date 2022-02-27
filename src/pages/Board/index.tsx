import { useMemo } from "react";
import { Observer } from "mobx-react-lite";
import { Div } from "@vkontakte/vkui";

import { taskGroupsProvider } from "../../core/providers/taskGroupProvider";

import TasksGroup from "../../components/TasksGroups";

import CreateTaskGroup from "./CreateTaskGroup";

function Board() {
  const tasksGroupPresenter = useMemo(taskGroupsProvider, []);

  return (
    <Div style={{ display: "flex" }}>
      <Observer>
        {() => (
          <>
            {tasksGroupPresenter.taskGroups.map((task) => (
              <div style={{ paddingRight: 5, paddingLeft: 5 }}>
                <TasksGroup
                  task={task}
                  onSave={tasksGroupPresenter.setTask}
                  addTask={(title) => tasksGroupPresenter.createTask(title, task.id)}
                />
              </div>
            ))}
          </>
        )}
      </Observer>

      <CreateTaskGroup onCreate={tasksGroupPresenter.createTaskGroup} />
    </Div>
  );
}
export default Board;
