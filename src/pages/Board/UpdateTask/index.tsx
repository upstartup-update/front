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
import { changeValue } from "../../../utils/changeValue";
import { Task } from "../../../core/entities/Task";
import { TaskUpdateModel } from "../../../core/presentation/TaskUpdateModel";
import { Observer } from "mobx-react-lite";

export const UPDATE_TASK_MODAL_ID = "UPDATE_TASK_MODAL_ID";

interface UpdateTaskProps {
  activeModal: string | null;
  closeModal: (id: string | null) => void;
  onSave: (task: Omit<Task, "id">) => void;
  task: Task | null;
}

function UpdateTask({ closeModal, activeModal, task, onSave }: UpdateTaskProps) {
  const taskUpdateModel = useMemo(() => new TaskUpdateModel(), []);

  useEffect(() => {
    task && taskUpdateModel.setTaskData(task);
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
                  onSave(taskUpdateModel.getModelData());
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
            <Observer>
              {() => (
                <Input
                  placeholder="Название задачи"
                  value={taskUpdateModel.title}
                  onChange={changeValue(taskUpdateModel.setTitle)}
                />
              )}
            </Observer>
          </FormItem>
          <FormItem top="Описание задачи">
            <Observer>
              {() => (
                <Textarea
                  value={taskUpdateModel.description}
                  onChange={changeValue(taskUpdateModel.setDescription)}
                />
              )}
            </Observer>
          </FormItem>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
}

export default memo(UpdateTask);
