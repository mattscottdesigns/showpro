import React from 'react';

const Edit = (props) =>{
    return <div className="bolt-table-edit" onClick={props.onEdit}>
        <i className="fas fa-edit text-primary"></i>
    </div>
}

export default Edit;
