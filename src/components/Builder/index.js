import React from 'react';

class Builder extends React.Component{
    
    render(){
        const { title, items } = this.props;

        return (
            <div className="builder">
                <div className="row">
                <div className="col-md-5 col-lg-4">
                    <div className="builder__tools">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#builder_collapse" className="" aria-expanded="true">
                                            {title || "Field List"}

                                        </a>
                                    </h4>
                                </div>
                                <div id="builder_collapse" className="panel-collapse collapse in" aria-expanded="true">
                                    {items && items.map((item, index) => {
                                        return(
                                            <div className="panel-body" key={index}>
                                                <div className="builder__tools--item ui-draggable ui-draggable-handle">
                                                    <div className="drag">{item}</div>
                                                    <div className="block">
                                                        <div className="block__handle">
                                                            <i className="fas fa-bars"></i>
                                                        </div>
                                                        <div className="block__data">
                                                            <div className="block__data__name">
                                                                <div className="block__data--title">{item}</div>
                                                            </div>
                                                            <div className="block__data__actions">
                                                                <div className="block__data--button mr-1"><button className="edit btn btn-block btn-sm btn-info">Edit</button></div>
                                                                <div className="block__data--button"><button className="remove btn btn-block btn-sm btn-danger">Remove</button></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                            
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-7 col-lg-8">
                    <div id="canvas" className="builder__canvas ui-sortable" data-blockid="@Model.RootContentBlockID">
                        {items && items.map((item, index) => {
                            return(
                                <div className="builder__tools--item ui-draggable ui-draggable-handle" key={index}>
                                    <div className="drag">{item}</div>
                                    <div className="block">
                                        <div className="block__handle">
                                            <i className="fas fa-bars"></i>
                                        </div>
                                        <div className="block__data">
                                            <div className="block__data__name">
                                                <div className="block__data--title">{item}</div>
                                            </div>
                                            <div className="block__data__actions">
                                                <div className="block__data--button mr-1"><button className="edit btn btn-block btn-sm btn-info">Edit</button></div>
                                                <div className="block__data--button"><button className="remove btn btn-block btn-sm btn-danger">Remove</button></div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default Builder;
