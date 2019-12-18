import React, { Component } from "react";

class Courses extends Component {
    //để dùng được thằng props trong hàm phải khai báo constructor cos bind
    // state trang thai
    constructor(props){
        super(props);

        this.state={
            hienDanhSach : false
        }

        this.tenham=this.tenham.bind(this);
        this.inputNameClick=this.inputNameClick.bind(this);
        this.doiTrangThaiState=this.doiTrangThaiState.bind(this);

    }
// dùng hàm gọi tới props
    tenham(a) {
        alert(a);
        // alert(this.props.name);
    }
// hàm onclick có / k tham số
    onclick() {
        alert("xuất");
    }
    onclick1(thamso) {
        alert(thamso);
    }
// lấy giá trị ô input
    inputNameClick(){
        console.log(this.refs.inputname.value);
    }
// hiển thị / k hiển thị dùng state
    hienThi(){
        if(this.state.hienDanhSach)
        {
            return(
                <a href="google.com" className="list-group-item active">
                    <h4 className="list-group-item-heading">{this.props.children}</h4>
                    <h4 className="list-group-item-heading">{this.props.children}</h4>
                    <h4 className="list-group-item-heading">{this.props.children}</h4>
                </a>
            );
        }
    }
// đổi trạng thái state
doiTrangThaiState(){
    this.setState({
        hienDanhSach: !this.state.hienDanhSach
    }

    );
}

    hienThiFree() {
        const temp = this.props.free;
        if (temp === true)
            return (
                <div className="panel panel-default">
                    <div className="btn-group">
                        <button onClick={this.onclick} type="button" className="btn btn-warning">view 1</button>
                        <button onClick={() => this.onclick1("btn 2")} type="button" className="btn btn-danger">view 2</button>
                        <button onClick={() => this.tenham(this.props.name)} type="button" className="btn btn-success">view 3</button>
                    </div>
                </div>
            );
        else
            return(
                //lấy giá trị trong input 
                <div className="input-group">
                    <label htmlFor="input-id" className="col-sm-2"></label>
                    <input type="text" className="form-control" ref="inputname"/>
                    <button type="submit" className="btn btn-primary" onClick={this.inputNameClick}>Submit</button>
                </div>
            );
        
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                    </div>
                    <div className="panel-body">
                    <button className="btn btn-primary" onClick={this.doiTrangThaiState}>show list</button>
                        <div className="list-group">
                            {this.hienThi()}
                            {this.hienThiFree()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Courses;