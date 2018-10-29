import React from 'react';

const Remove = (props) =>{
    return <div className="bolt-table-remove" onClick={props.onRemove}>
        <i className="fas fa-times text-danger"></i>
    </div>
}

export default Remove;
