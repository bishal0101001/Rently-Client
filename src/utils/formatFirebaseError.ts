export function formatFirebaseError(error: string): string {
  const startIndex = error.indexOf("/");
  const endIndex = error.indexOf(")");

  const errorMsg = error.slice(startIndex + 1, endIndex);

  return errorMsg;
}
