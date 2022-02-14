import { memo } from "react";
import { Button, Cell, Group, Input, List, Spacing, Title } from "@vkontakte/vkui";

import { TaskGroupModel } from "../../core/entities/TaskGroupModel";
import useValue from "../../hooks/useValue";

interface TasksGroupProps {
  task: TaskGroupModel;
  addTask: (title: string) => void;
}

function TasksGroup({ task, addTask }: TasksGroupProps) {
  const [value, setValue, clear] = useValue();

  return (
    <Group style={{ width: 272 }}>
      <Title level="2" weight="semibold">
        {task.title}
      </Title>
      <Spacing size={10} />
      <List>
        {task.tasks.map((item) => (
          <Cell key={item.id} draggable onDragFinish={({ from, to }) => console.log(from, to)}>
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
