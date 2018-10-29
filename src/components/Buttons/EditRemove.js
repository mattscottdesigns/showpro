import React from 'react';
import Edit from './Edit';
import Remove from './Remove';

const EditRemove = (props) =>{
    return(
       <React.Fragment>
        <Edit {...props}/>
        <Remove {...props}/>
       </React.Fragment>
    )
}

export default EditRemove;
