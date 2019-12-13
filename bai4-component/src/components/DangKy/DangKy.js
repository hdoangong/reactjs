import React,{Component} from 'react';
import './DangKy.css';
class DangKy extends Component{
    render(){
        return(
            <div class="container">
                <h1 class="text-center">Cách thiết kế giao diện trang đăng ký bằng Bootstrap</h1> 
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4 well well-sm col-md-offset-4">
                        <legend><a href="http://hocwebgiare.com/"><i class="glyphicon glyphicon-globe"></i></a> Đăng ký thành viên!</legend> 
                        <form action="http://hocwebgiare.com" method="post" class="form" role="form">
                            <div class="row">
                                <div class="col-xs-6 col-md-6">
                                    <input class="form-control" name="firstname" placeholder="Họ" required="" autofocus="" type="text"/>
                                    <div class="col-xs-6 col-md-6"> <input class="form-control" name="lastname" placeholder="Tên" required="" type="text"/> 
                                    </div> 
                                </div> 
                                <input class="form-control" name="youremail" placeholder="Email" type="email"/> 
                                <input class="form-control" name="password" placeholder="Mật khẩu" type="password"/> 
                                <input class="form-control" name="retypepassword" placeholder="Nhập lại mật khẩu" type="password"/> 
                                <label for=""> Ngày sinh</label> 
                                <div class="row"> 
                                    <div class="col-xs-4 col-md-4">
                                        <select class="form-control">
                                            <option value="Day">Ngày</option>            
                                        </select> 
                                    </div> 
                                    <div class="col-xs-4 col-md-4"> 
                                        <select class="form-control">              
                                            <option value="Month">Tháng</option>            
                                        </select> 
                                    </div> 
                                    <div class="col-xs-4 col-md-4"> 
                                        <select class="form-control">              
                                            <option value="Year">Năm</option>            
                                        </select> 
                                    </div> 
                                </div>
                                <label class="radio-inline">          
                                    <input name="sex" id="inlineCheckbox1" value="male" type="radio"/> Nam 
                                </label> 
                                <label class="radio-inline">          
                                    <input name="sex" id="inlineCheckbox2" value="female" type="radio"/>  Nữ 
                                </label> 
                                <br/> 
                                <br/> 
                                <button class="btn btn-lg btn-primary btn-block" type="submit"> Đăng ký</button> 
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        );
    };
}
export default DangKy;