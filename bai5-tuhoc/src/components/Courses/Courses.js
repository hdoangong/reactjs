import React,{ Component } from "react";

class Courses extends Component{
    // để dùng được thằng props trong hàm phải khai báo constructor
    // constructor(props){
    //     super(props);
    //     this.tenham=this.tenham(this.props);
    // }
    tenham(a){
        alert(a);
        // alert(this.props.name);
    }
    onclick(){
        alert("xuất");
    }
    onclick1(thamso){
        alert(thamso);
    }
    
    hienThiFree(){
        const temp=this.props.free;
        if(temp===true)
            return (
              
              <div class="panel panel-default">
                    <div class="btn-group">
                          
                          <button onClick={this.onclick} type="button" class="btn btn-warning">view 1</button>
                          <button onClick={()=> this.onclick1("btn 2")} type="button" class="btn btn-danger">view 2</button>
                          <button onClick={()=>this.tenham(this.props.name)} type="button" class="btn btn-success">view 3</button>
                          
                    </div>
                   
              </div>
                
              
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