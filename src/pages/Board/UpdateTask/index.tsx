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

export const UPDATE_TASK_MODAL_ID = "UPDATE_TASK_MODAL_ID";

interface UpdateTaskProps {
  activeModal: string | null;
  closeModal: (id: string | null) => void;
  onSave: (task: TaskModel) => void;
  task: TaskModel | null;
}

function UpdateTask({ closeModal, activeModal, task, onSave }: UpdateTaskProps) {
  const taskUpdatePresenter = useMemo(() => new TaskUpdatePresenter(), []);
  const tasksGroupPresenterState = usePresenterObservableState(taskUpdatePresenter);

  useEffect(() => {
    task && taskUpdatePresenter.setTaskData(task);
  }, [task]);

  console.log(tasksGroupPresenterState.taskModel.description);
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
                  onSave(tasksGroupPresenterState.taskModel);
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
              value={tasksGroupPresenterState.taskModel.title}
              onChange={changeValue(taskUpdatePresenter.setTitle)}
            />
          </FormItem>
          <FormItem top="Описание задачи">
            <Textarea
              value={tasksGroupPresenterState.taskModel.description}
              onChange={changeValue(taskUpdatePresenter.setDescription)}
            />
          </FormItem>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
}

export default memo(UpdateTask);
