import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Builder from '../../components/Builder';


class Demographics extends Component {

    state = {
        "compact": true
    }

    handleView = () => {
        const { compact } = this.state;

        this.setState({
            "compact": !compact
        })
    }

    render() {
        const { compact } = this.state;

        return (
            <div className="contact">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Demographics</li>
                </ul>

                <div className="text-center mb-5"><Link to={"/registration/demographics/edit"} className="btn btn-primary"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Demographic</Link></div>
                
                <Builder 
                    items={["Question #1","Question #2","Question #3"]}
                />

            </div>  
        );
    }
}

export default Demographics;



