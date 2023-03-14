import React from 'react'
import { useParams } from 'react-router-dom';
import { useMeQuery } from '../../../redux/service/session.service';

const AddToWhisList = () => {
    
    if(!error) {
        return  isLoading?( <h3>cargando...</h3>):( 
           
            <p>cargo..</p>
        )
      
    }
}

export default AddToWhisList