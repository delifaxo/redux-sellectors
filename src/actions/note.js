export function actionAddedNote(text) {
    return {
        type: "str_filter",
        payload: text
    }
}
export function clearTextNote() {
    return {
      type: "clear_text",
    };
  }