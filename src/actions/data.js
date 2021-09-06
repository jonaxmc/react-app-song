
import { fileUpload } from "../helpers/fileUpload";

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";


export const startUploading =(file)=>{
    return async (dispatch)=>{
        dispatch(startLoading())
        const data = await fileUpload(file);

        console.log(data['historial'])
        dispatch(finishLoading())
        dispatch(addData(data))
        dispatch(startSaveHistorial(data['historial']))
        
    }
}

export const startSaveHistorial =(historial)=>{
    return (dispatch)=>{
        const array = JSON.parse(sessionStorage.getItem('historial')) || []
        

        dispatch(saveHistorial(historial))
        array.push(historial)
        sessionStorage.setItem('historial', JSON.stringify(array))
        
    }
}

export const addData =(data)=>({
    type: types.saveData,
    payload:data
    

})

export const saveHistorial =(data)=>({
    type: types.saveHistorial,
    payload:data
    

})




// export const startSaveData =()=>{

// }