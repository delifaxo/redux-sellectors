import { createSelector } from "reselect";

const getArrayFilters = state => state.noteStore.note;
const getNoteArray = state => state.noteStore.array;

export const newFilteredArrayNote = () => { return createSelector(
    [getArrayFilters, getNoteArray],
    (arrayFilters, arrayNote) => {
        var array = arrayNote.filter(data => !arrayFilters.some(el => data.car.includes(el)));
        return array;
    }
)}