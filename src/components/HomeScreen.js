import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { startUploading } from '../actions/data'
import { pathFile } from '../actions/path';


// import { startUploading } from '../actions/song';
// import { fileUpload } from '../helpers/fileUpload';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();


    const [pathState, setPathState] = useState()
    const path = useSelector(state => state.path)
    // console.log(state)
    let file;

    const handleFileChange = (e) => {
        
        file = e.target.files[0];
        setPathState(file)
        dispatch(pathFile(file.name))
        

       

    }

    const handleSubmit = () => {
      

        if (pathState) {
            dispatch(startUploading(pathState, history))
        }
    }



    return (
        <div className="home_container">
            <div id="upload-area" className="form">
                <div className="upload-ui">
                    <div className="titulo">Drag and drop audio file here!</div>
                    <p className="titulo">OR</p>
                    <label htmlFor="fileSelector" className="btn-primario">CHOOSE FILE</label>
                    <input
                        id="fileSelector"
                        type="file"
                        name="file"
                        className="btn-secundario"
                        onChange={handleFileChange}
                        style={{display:'none'}}
                    />
                  
                    {/* <div id="file-name" className="file-name"></div> */}

                    {/* <div className="upload-btn-wrapper"> */}
                        {/* <button className="btn-secundario">CHOOSE FILE</button> */}
                        {/* <input type="file" name="file" onChange={handleFileChange}/> */}
                        
                    {/* </div> */}
                    <div className="file-name">{path}</div>



                </div>

            </div>
            {/* <div id="loading"></div> */}

            <div className="contenedor-enviar">

            <button onClick={handleSubmit} className="btn-primario">Enviar</button>
            </div>


        </div>
    )
}
