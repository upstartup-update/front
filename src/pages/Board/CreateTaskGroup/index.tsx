import { memo } from "react";
import { Button, Group, Input, Spacing } from "@vkontakte/vkui";

import useValue from "../../../hooks/useValue";

interface HookValueReturnProps {
  onCreate: (title: string) => void;
}

function CreateTaskGroup({ onCreate }: HookValueReturnProps) {
  const [value, setValue, clear] = useValue();

  return (
    <Group style={{ width: 272 }}>
      <Input type="text" placeholder="Ввести заголовок списка" onChange={setValue} value={value} />
      <Spacing size={10} />
      <Button
        onClick={() => {
          onCreate(value);
          clear();
        }}
      >
        Добавить список
      </Button>
    </Group>
  );
}

export default memo(CreateTaskGroup);
