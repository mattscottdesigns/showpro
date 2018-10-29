import React from 'react';

const Builder = () => {
    return (
        <div className="builder">
            <div className="row">
                <div className="col-md-5 col-lg-4">
                    <div className="builder__tools">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#collapse1">Registration Fields
                                            
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse1" className="panel-collapse">
                                    <div className="panel-body">
                                        <div className="builder__item">
                                            <div className="drag">Field Name #1</div>
                                            <div className="block">
                                                <div className="block__handle">
                                                    <i className="fas fa-bars"></i>
                                                </div>
                                                <div className="block__data">
                                                    <div className="block__data__name">
                                                        <div className="block__data--title">Field Name #1</div>
                                                    </div>
                                                    <div className="block__data__actions">
                                                        <div className="block__data--button mr-1"><button className="btn btn-block btn-sm btn-info">Edit</button></div>
                                                        <div className="block__data--button"><button className="btn btn-block btn-sm btn-danger">Delete</button></div>
                                                    </div>
                                                </div>
                                                <div className="block__settings">
                                                    <div className="block__settings__type">
                                                        <div className="block__settings--title">Field Type</div>
                                                        <div className="block__settings--value">Text</div>
                                                    </div>
                                                    <div className="block__settings__length">
                                                        <div className="block__settings--title">Length</div>
                                                        <div className="block__settings--value">50</div>
                                                    </div>
                                                    <div className="block__settings__required">
                                                        <div className="block__settings--title">Required</div>
                                                        <div className="block__settings--value">No</div>
                                                    </div>
                                                    <div className="block__settings__readonly">
                                                        <div className="block__settings--title">Read Only</div>
                                                        <div className="block__settings--value">Yes</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="builder__item">
                                            <div className="drag">Field Name #2</div>
                                            <div className="block">
                                                <div className="block__handle">
                                                    <i className="fas fa-bars"></i>
                                                </div>
                                                <div className="block__data">
                                                    <div className="block__data__name">
                                                        <div className="block__data--title">Field Name #2</div>
                                                    </div>
                                                    <div className="block__data__actions">
                                                        <div className="block__data--button mr-1"><button className="btn btn-block btn-sm btn-info">Edit</button></div>
                                                        <div className="block__data--button"><button className="btn btn-block btn-sm btn-danger">Delete</button></div>
                                                    </div>
                                                </div>
                                                <div className="block__settings">
                                                    <div className="block__settings__type">
                                                        <div className="block__settings--title">Field Type</div>
                                                        <div className="block__settings--value">Dropdown</div>
                                                    </div>
                                                    <div className="block__settings__length">
                                                        <div className="block__settings--title">Length</div>
                                                        <div className="block__settings--value">20</div>
                                                    </div>
                                                    <div className="block__settings__required">
                                                        <div className="block__settings--title">Required</div>
                                                        <div className="block__settings--value">Yes</div>
                                                    </div>
                                                    <div className="block__settings__readonly">
                                                        <div className="block__settings--title">Read Only</div>
                                                        <div className="block__settings--value">No</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="builder__item">
                                            <div className="drag">Field Name #3</div>
                                            <div className="block">
                                                <div className="block__handle">
                                                    <i className="fas fa-bars"></i>
                                                </div>
                                                <div className="block__data">
                                                    <div className="block__data__name">
                                                        <div className="block__data--title">Field Name #3</div>
                                                    </div>
                                                    <div className="block__data__actions">
                                                        <div className="block__data--button mr-1"><button className="btn btn-block btn-sm btn-info">Edit</button></div>
                                                        <div className="block__data--button"><button className="btn btn-block btn-sm btn-danger">Delete</button></div>
                                                    </div>
                                                </div>
                                                <div className="block__settings">
                                                    <div className="block__settings__type">
                                                        <div className="block__settings--title">Field Type</div>
                                                        <div className="block__settings--value">Checkbox</div>
                                                    </div>
                                                    <div className="block__settings__length">
                                                        <div className="block__settings--title">Length</div>
                                                        <div className="block__settings--value">30</div>
                                                    </div>
                                                    <div className="block__settings__required">
                                                        <div className="block__settings--title">Required</div>
                                                        <div className="block__settings--value">Yes</div>
                                                    </div>
                                                    <div className="block__settings__readonly">
                                                        <div className="block__settings--title">Read Only</div>
                                                        <div className="block__settings--value">No</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="col-md-7 col-lg-8">
                    <div className="builder__canvas">
                        <div className="builder__item ui-draggable ui-draggable-handle" >
                            <div className="drag">Field Name #1</div>
                            <div className="block">
                                <div className="block__handle">
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="block__data">
                                    <div className="block__data__name">
                                        <div className="block__data--title">Field Name #1</div>
                                    </div>
                                    <div className="block__data__actions">
                                        <div className="block__data--button mr-1"><button className="btn btn-block btn-sm btn-info">Edit</button></div>
                                        <div className="block__data--button"><button className="btn btn-block btn-sm btn-danger">Delete</button></div>
                                    </div>
                                </div>
                                <div className="block__settings">
                                    <div className="block__settings__type">
                                        <div className="block__settings--title">Field Type:</div>
                                        <div className="block__settings--value">Text</div>
                                    </div>
                                    <div className="block__settings__length">
                                        <div className="block__settings--title">Length:</div>
                                        <div className="block__settings--value">50</div>
                                    </div>
                                    <div className="block__settings__required">
                                        <div className="block__settings--title">Required:</div>
                                        <div className="block__settings--value">No</div>
                                    </div>
                                    <div className="block__settings__readonly">
                                        <div className="block__settings--title">Read Only:</div>
                                        <div className="block__settings--value">Yes</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="builder__item ui-draggable ui-draggable-handle" >
                            <div className="drag">Field Name #2</div>
                            <div className="block">
                                <div className="block__handle">
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="block__data">
                                    <div className="block__data__name">
                                        <div className="block__data--title">Field Name #2</div>
                                    </div>
                                    <div className="block__data__actions">
                                        <div className="block__data--button mr-1"><button className="btn btn-block btn-sm btn-info">Edit</button></div>
                                        <div className="block__data--button"><button className="btn btn-block btn-sm btn-danger">Delete</button></div>
                                    </div>
                                </div>
                                <div className="block__settings">
                                    <div className="block__settings__type">
                                        <div className="block__settings--title">Field Type:</div>
                                        <div className="block__settings--value">Text</div>
                                    </div>
                                    <div className="block__settings__length">
                                        <div className="block__settings--title">Length:</div>
                                        <div className="block__settings--value">25</div>
                                    </div>
                                    <div className="block__settings__required">
                                        <div className="block__settings--title">Required:</div>
                                        <div className="block__settings--value">Yes</div>
                                    </div>
                                    <div className="block__settings__readonly">
                                        <div className="block__settings--title">Read Only:</div>
                                        <div className="block__settings--value">No</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;