import { memo } from "react";
import { Button, Group, Input, Spacing, Title } from "@vkontakte/vkui";

import { TaskGroupModel } from "../../core/entities/TaskGroupModel";

interface TasksGroupProps {
  task: TaskGroupModel;
}

function TasksGroup({ task }: TasksGroupProps) {
  return (
    <Group style={{ width: 272 }}>
      <Title level="2" weight="semibold">
        {task.title}
      </Title>
      <Spacing size={10} />
      <Input type="text" placeholder="Введите заголовок для карточки" />
      <Spacing size={10} />
      <Button>Добавить задачу</Button>
    </Group>
  );
}

export default memo(TasksGroup);
