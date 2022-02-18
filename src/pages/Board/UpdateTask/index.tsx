import {
  FormItem,
  Group,
  Input,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderSubmit,
  Textarea,
} from "@vkontakte/vkui";
import { memo, useEffect, useMemo } from "react";
//todo импорты оптимизировать
import { TaskUpdateBLoC } from "../../../core/presentation/TaskUpdateBLoC";
import { useBloCState } from "../../../hooks/useBloCState";
import { changeValue } from "../../../utils/changeValue";
import { Task } from "../../../core/entities/Task";

export const UPDATE_TASK_MODAL_ID = "UPDATE_TASK_MODAL_ID";

interface UpdateTaskProps {
  activeModal: string | null;
  closeModal: (id: string | null) => void;
  onSave: (task: Omit<Task, "id">) => void;
  task: Task | null;
}

function UpdateTask({ closeModal, activeModal, task, onSave }: UpdateTaskProps) {
  const taskUpdatePresenter = useMemo(() => new TaskUpdateBLoC(), []);
  const tasksGroupPresenterState = useBloCState(taskUpdatePresenter);

  useEffect(() => {
    task && taskUpdatePresenter.setTaskData(task);
  }, [task]);

  return (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <ModalPage
        id={UPDATE_TASK_MODAL_ID}
        onClose={() => closeModal(null)}
        header={
          <ModalPageHeader
            right={
              <PanelHeaderSubmit
                onClick={() => {
                  onSave(tasksGroupPresenterState);
                  closeModal(null);
                }}
              />
            }
          >
            Фильтры
          </ModalPageHeader>
        }
      >
        <Group>
          <FormItem top="Название">
            <Input
              placeholder="Название задачи"
              value={tasksGroupPresenterState.title}
              onChange={changeValue(taskUpdatePresenter.setTitle)}
            />
          </FormItem>
          <FormItem top="Описание задачи">
            <Textarea
              value={tasksGroupPresenterState.description}
              onChange={changeValue(taskUpdatePresenter.setDescription)}
            />
          </FormItem>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
}

export default memo(UpdateTask);
