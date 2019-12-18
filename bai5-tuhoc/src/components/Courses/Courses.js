import React,{ Component } from "react";

class Courses extends Component{
    hienThiFree(){
        const temp=this.props.free;
        if(temp===true)
            return (
                <button>hiển thị</button>
            );

        else
                return;
    }
    render(){
        return(
            
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                </div>
                    <div className="panel-body">
                    
                        <div className="list-group">
                            <a href="google.com" className="list-group-item active">
                                <h4 className="list-group-item-heading">{this.props.children}</h4>
                                <h4 className="list-group-item-heading">{this.props.children}</h4>
                                <h4 className="list-group-item-heading">{this.props.children}</h4>
                            </a>
                            {this.hienThiFree()}
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            
          
        );
    }
}
export default Courses;