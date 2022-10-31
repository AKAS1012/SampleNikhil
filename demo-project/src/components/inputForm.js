import React from 'react';
import form_obj from '../components/JsonData';

const InputForm =() =>{
  return (
    <div>
        {form_obj.map((formitem, index)=>(
                <col key={index}>
                <h1>{formitem.name}</h1>
                </col>   
            ))
        }
    </div>
  )
}

export default InputForm