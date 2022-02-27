import { Button, Input, Spacing } from "@vkontakte/vkui";
import useValue from "../../../hooks/useValue";

interface CreateTaskGroupProps {
  addTask: (title: string) => void;
}

function CreateTaskGroup({ addTask }: CreateTaskGroupProps) {
  const [value, setValue, clear] = useValue();

  return (
    <>
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
    </>
  );
}

export default CreateTaskGroup;
