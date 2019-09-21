import { createSelector } from "reselect";

const getVisibilityFilter = state => state.noteStore.note;
const getTodos = state => state.noteStore.array;

export const makeGetVisibleTodos = () => { return createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        var array = todos.filter(data => !visibilityFilter.some(el => data.car.includes(el)));
        return array;
    }
)}