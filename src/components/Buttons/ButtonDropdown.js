import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const ButtonDropdown = (props) =>{
    const { items } = props;

    const renderItems = () => {
        if( items ){
            let rendered = [];
            items.map(function(item, index){
                rendered.push(<MenuItem key={index} eventKey={index}>{item}</MenuItem>)
            });
            return rendered
        } else {
            return(
                <React.Fragment>
                    <MenuItem eventKey="1">Edit</MenuItem>
                    <MenuItem eventKey="2">Remove</MenuItem>
                </React.Fragment>
            )
        }
    }

    return(
        <DropdownButton title={false} id={"dropdown"}>
            {renderItems()}
        </DropdownButton>
    )
}

export default ButtonDropdown;
