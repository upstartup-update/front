import { useMemo } from "react";
import { Div } from "@vkontakte/vkui";

import { taskGroupsProvider } from "../../core/providers/taskGroupProvider";
import { useBloCState } from "../../hooks/useBloCState";
import TasksGroup from "../../components/TasksGroups";
import CreateTaskGroup from "./CreateTaskGroup";
import { useSelectorApp } from "../../core/store";
import { useDispatch } from "react-redux";
import { createTaskAction, createTaskGroupAction } from "../../core/store/tasks/actions";

function Board() {
  const tasksGroupPresenter = useMemo(taskGroupsProvider, []);

  const dispatch = useDispatch();

  const taskGroups = useSelectorApp((state) => state.tasks.taskGroups);
  console.log(taskGroups);

  return (
    <Div style={{ display: "flex" }}>
      {taskGroups.map((task) => (
        <div style={{ paddingRight: 5, paddingLeft: 5 }}>
          <TasksGroup
            task={task}
            onSave={tasksGroupPresenter.setTask}
            addTask={(title) => dispatch(createTaskAction(title))}
          />
        </div>
      ))}

      <CreateTaskGroup onCreate={tasksGroupPresenter.createTaskGroup} />
    </Div>
  );
}
export default Board;
