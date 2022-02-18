import { memo, useState } from "react";
import { Button, Cell, Group, Input, List, Spacing, Title } from "@vkontakte/vkui";

import { TaskGroupModel } from "../../core/entities/TaskGroupModel";
import useValue from "../../hooks/useValue";
import UpdateTask, { UPDATE_TASK_MODAL_ID } from "../../pages/Board/UpdateTask";
import { Task } from "../../core/entities/Task";

interface TasksGroupProps {
  task: TaskGroupModel;
  onSave: (id: number, task: Omit<Task, "id">) => void;
  addTask: (title: string) => void;
}

function TasksGroup({ task, addTask, onSave }: TasksGroupProps) {
  const [value, setValue, clear] = useValue();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  return (
    <Group style={{ width: 272 }}>
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
      <List>
        {task.tasks.map((item) => (
          <Cell
            key={item.id}
            onClick={() => {
              setCurrentTask(item);
              setActiveModal(UPDATE_TASK_MODAL_ID);
            }}
            onDragFinish={({ from, to }) => console.log(from, to)}
          >
            {item.title}
          </Cell>
        ))}
      </List>
      <Input
        type="text"
        placeholder="Введите заголовок для карточки"
        value={value}
        onChange={setValue}
      />
      <Spacing size={10} />
      <Button
        onClick={() => {
          addTask(value);
          clear();
        }}
      >
        Добавить задачу
      </Button>
    </Group>
  );
}

export default memo(TasksGroup);
