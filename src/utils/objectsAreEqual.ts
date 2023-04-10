export const objectsAreEqual = (obj1: { id: string }, obj2: { id: string }) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
