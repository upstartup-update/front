import { memo } from "react";
import { Observer } from "mobx-react-lite";
import { Cell, List } from "@vkontakte/vkui";

import { TaskGroupModel } from "../../../core/entities/TaskGroupModel";
import { Task } from "../../../core/entities/Task";

interface TaskGroupListProps {
  task: TaskGroupModel;
  onClickTask: (task: Task) => void;
}

function TasksGroupList({ task, onClickTask }: TaskGroupListProps) {
  return (
    <List>
      <Observer>
        {() => (
          <>
            {task.tasks.map((task) => (
              <Cell
                key={task.id}
                onClick={() => onClickTask(task)}
                onDragFinish={({ from, to }) => console.log(from, to)}
              >
                {task.title}
              </Cell>
            ))}
          </>
        )}
      </Observer>
    </List>
  );
}

export default memo(TasksGroupList);
