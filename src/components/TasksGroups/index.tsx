import { memo, useCallback, useState } from "react";
import { Group, Spacing, Title } from "@vkontakte/vkui";

import { TaskGroupModel } from "../../core/entities/TaskGroupModel";
import { Task } from "../../core/entities/Task";

import UpdateTask, { UPDATE_TASK_MODAL_ID } from "../../pages/Board/UpdateTask";

import CreateTaskGroup from "./CreateTaskGroup";
import TasksGroupList from "./TasksGroupsList";

interface TasksGroupProps {
  task: TaskGroupModel;
  onSave: (id: number, task: Omit<Task, "id">) => void;
  addTask: (title: string) => void;
}

function TasksGroup({ task, addTask, onSave }: TasksGroupProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onOpenModal = useCallback((task) => {
    setCurrentTask(task);
    setActiveModal(UPDATE_TASK_MODAL_ID);
  }, []);

  return (
    <Group>
      <UpdateTask
        onSave={(taskUpdate) => currentTask?.id && onSave(currentTask.id, taskUpdate)}
        activeModal={activeModal}
        closeModal={() => {
          setCurrentTask(null);
          setActiveModal(null);
        }}
        task={currentTask}
      />
      <Title level="2" weight="semibold">
        {task.title}
      </Title>
      <Spacing size={10} />
      <TasksGroupList task={task} onClickTask={onOpenModal} />
      <CreateTaskGroup addTask={addTask} />
    </Group>
  );
}

export default memo(TasksGroup);
