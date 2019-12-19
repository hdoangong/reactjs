import React, { Component } from 'react';
class Control extends Component {
 render(){
    return (
        <div className="row">
                
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="dropdown">{/* chưa hiểu cái này làm gì*/}
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort by <span className="caret" />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="google.com">Action</a></li>
                                <li><a href="google.com">Another action</a></li>
                                <li><a href="google.com">Something else here</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="google.com">Separated link</a></li>
                            </ul>
                            <span className="label label-success label-medium">NAME-DESC</span>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block">button</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-7 col-md-5">
                        <form action="" method="POST" className="form-inline" role="for\m">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="">label</label>
                                <input type="text" className="form-control" placeholder="Task Name" />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="">label</label>
                                <select name="ds" className="form-control" id="inputDS" required="required">
                                    Small
                            <option value={1}> medium</option>
                                    <option value={1}> high</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-defaul">cancel</button>
                        </form>
                    </div>
                </div>
            </div>
    );
 }
    
}
export default Control;