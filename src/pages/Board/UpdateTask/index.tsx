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
import { TaskUpdatePresenter } from "../../../core/presentation/TaskUpdatePresenter";
import { usePresenterObservableState } from "../../../hooks/usePlocState";
import { changeValue } from "../../../utils/changeValue";
import { TaskModel } from "../../../core/entities/TaskModel";
import { TaskUpdateState } from "../../../core/presentation/TaskUpdatePresenter/type";

export const UPDATE_TASK_MODAL_ID = "UPDATE_TASK_MODAL_ID";

interface UpdateTaskProps {
  activeModal: string | null;
  closeModal: (id: string | null) => void;
  onSave: (task: TaskUpdateState) => void;
  task: TaskModel | null;
}

function UpdateTask({ closeModal, activeModal, task, onSave }: UpdateTaskProps) {
  const taskUpdatePresenter = useMemo(() => new TaskUpdatePresenter(), []);
  const tasksGroupPresenterState = usePresenterObservableState(taskUpdatePresenter);

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
