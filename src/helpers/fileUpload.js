import { Redirect, useHistory } from 'react-router';
import Swal from 'sweetalert2'


export const fileUpload = async (file)=>{



    // const cloudUrl = 'http://localhost:5000/upload';
    const cloudUrl = 'https://backend-song-recomender.herokuapp.com/upload';

    const formData = new FormData();
    formData.append('song',file);

    try {
        Swal.fire({
            title: 'Processing song',
            html: 'Wait a moment please',
            timerProgressBar: true,
            didOpen: ()=>{
                Swal.showLoading()
            }
        }
        )
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            
            sessionStorage.setItem('datos', JSON.stringify(cloudResp))
            
            // window.location.href = "/results";
            // window.location.href = "/title-song-recommender-app/#/results";
            
            

            Swal.close()
            
            return cloudResp;
        }else{
            throw await resp.json();

        }
    } catch (error) {
        console.log(error)
    }
}