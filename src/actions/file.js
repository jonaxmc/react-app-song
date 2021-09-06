import { types } from "../types/types"

export const uploadFile = (file) => ({
    type: types.uploadFile,
    payload: file

});

