import React, { Component } from 'react';
class ListTask extends Component {
 render(){
    return (
        <div className="alert alert-success">
                    <div className="panel-heading"> List Task</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">STT</th>
                                <th>Task</th>
                                <th style={{ width: '10%' }} className="text-center">Level</th>
                                <th style={{ width: '20%' }} >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td> cái gì kệ m </td>
                                <td className="text-center"> <span className="label label-danger">Hight</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td> cái gì kệ m , kệ m kệ m</td>
                                <td className="text-center"> <span className="label label-default">Hight</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td> cái gì kệ m , kệ m kệ m</td>
                                <td className="text-center"> <span className="label label-primary">Hight</span></td>
                                <td>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    );
 }
    
}
export default ListTask;