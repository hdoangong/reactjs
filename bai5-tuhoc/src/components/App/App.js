import React, { Component } from 'react';
import './App.css';
import Courses from '../Courses/Courses';


class App extends Component {
  render(){
    const arrs=[
      {name:'Toán',free: true,desc:'học' },
      {name:'Lý', free : true, desc:'List group item heading'},
      {name:'Hóa', free : false, desc:'abc'}
    ]
    //console.log(arrs);

    const elmCourses=arrs.map(function(arr,id){
    //  console.log(arr.name,arr.free,arr.desc);
      return(
        <Courses key={id} name={arr.name} free= {arr.free}>{arr.desc}</Courses>
      );
      
    });
    return (
      
      <div className="container">
        {elmCourses}
      </div>
      
    );
  }
  
}

export default App;
