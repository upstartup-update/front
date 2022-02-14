function numberId() {
  let id = 0;
  return () => ++id;
}

export const generateId = numberId();
