
import { useHistory } from "react-router";
import { fileUpload } from "../helpers/fileUpload";

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";


export const startUploading =(file, history)=>{
   
    return async (dispatch)=>{
        dispatch(startLoading())
        const data = await fileUpload(file);

        // console.log(data['historial'])
        console.log(data)
        dispatch(finishLoading())
        dispatch(addData(data))
        dispatch(startSaveHistorial(data['historial']))
        history.push("/results");
        
        
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