import React,{ Component } from "react";

class Courses extends Component{
    render(){
        return(
            
            <div className="container">
                
                <div className="panel panel-info">
                      <div className="panel-heading">
                            <h3 className="panel-title">Courses</h3>
                      </div>
                      <div className="panel-body">
                            
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                
                                <ul className="list-group">
                                    <li className="list-group-item">Item 1</li>
                                    <li className="list-group-item">Item 2</li>
                                    <li className="list-group-item">Item 3</li>
                                </ul>
                                
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                
                                <ul className="list-group">
                                    <li className="list-group-item">Item 1</li>
                                    <li className="list-group-item">Item 2</li>
                                    <li className="list-group-item">Item 3</li>
                                </ul>
                                
                            </div>
                            
                      </div>
                </div>
                
            </div>
          
        );
    }
}
export default Courses;