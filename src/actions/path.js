import { types } from "../types/types";

export const pathFile = (name) => ({
    type: types.pathLoading,
    payload: name

});