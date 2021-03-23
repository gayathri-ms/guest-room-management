import React from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../admin/helper/adminapi';

const AdminDashBoard =()=>{

    // const {
    //     user: {name, email, role}
    // } = isAuthenticated();

    const adminLeftSide =()=>{
            //
            return (
                <div className="card">
                  <h4 className="card-header text-center">Admin Dashboard</h4>
                  <ul className="list-group">
                      <li className="list-group-item">
                        <Link to="/admin/addstudent" className="nav-link text-dark">
                        Add Student
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/addfaculty" className="nav-link text-dark">
                        Add Faculty
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/addinvitee" className="nav-link text-dark">
                        Add Employee
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/deletestudent" className="nav-link text-dark">
                        Delete Student
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/deletefaculty" className="nav-link text-dark">
                        Delete Faculty
                        </Link>
                      </li>
                      
                      <li className="list-group-item">
                        <Link to="/admin/deleteinvitee" className="nav-link text-dark">
                        Delete Employee
                        </Link>
                      </li>
                  </ul>
                </div>
            )
    }


    return (
    <Base
    title="Welcome to the Admin Page" 
    description="Add the students / faculties / invitees details here"
    className= "container1"
    >
         <div className="row1">
        <div className="col-md-3 offset-md-4">{adminLeftSide()}</div>
      
         
        
        </div>

    </Base>
    )

}


export default AdminDashBoard;

