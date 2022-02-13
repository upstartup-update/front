import { ChangeEventHandler, useCallback, useState } from "react";
import { changeValue } from "../utils/changeValue";

type HookValueReturn = [string, ChangeEventHandler<any> | undefined];

function useValue(initialState: string = ""): HookValueReturn {
  const [value, setValue] = useState(initialState);
  return [value, useCallback(changeValue(setValue), [])];
}

export default useValue;
