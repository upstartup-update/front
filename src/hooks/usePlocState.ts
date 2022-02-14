import { useEffect, useState } from "react";

import { PresenterObservable } from "../core/presentation/common/PresenterObservable";

/**
 * Отвечает за связь презенторов с реактом
 * Подписывается на изменения презентора
 * и при изменении состояния вызывает setState, что провоцирует перерендер реакта
 */
export function usePresenterObservableState<S>(presenterObservable: PresenterObservable<S>) {
  const [state, setState] = useState(presenterObservable.state);

  useEffect(() => {
    presenterObservable.subscribe(setState);
    return () => presenterObservable.unsubscribe(setState);
  }, [presenterObservable]);

  return state;
}
