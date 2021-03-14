import React from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';


const AdminDashBoard =()=>{

    // const {
    //     user: {name, email, role}
    // } = isAuthenticated();

    const adminLeftSide =()=>{
            //
            return (
                <div className="card">
                  <h4 className="card-header bg-dark text-white">Admin Dashboard</h4>
                  <ul className="list-group">
                      <li className="list-group-item">
                        <Link to="/addstudent" className="nav-link text-info">
                        Add Student
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/addfaculty" className="nav-link text-info">
                        Add Faculty
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/addinvitee" className="nav-link text-info">
                        Add Invitee
                        </Link>
                      </li>
                  </ul>
                </div>
            )
    }

    // const adminRightSide =()=>{
    //         //
    //         return (
    //             <div className="card">
    //               <h4 className="card-header bg-dark text-white">Admin Dashboard</h4>
    //               <ul className="list-group">
    //                   <li className="list-group-item">
    //                     <Link to="/deletestudent" className="nav-link text-info">
    //                     Delete Student
    //                     </Link>
    //                   </li>
    //                   <li className="list-group-item">
    //                     <Link to="/deletefaculty" className="nav-link text-info">
    //                     Delete Faculty
    //                     </Link>
    //                   </li>
    //                   <li className="list-group-item">
    //                     <Link to="/deleteinvitee" className="nav-link text-info">
    //                     Delete Invitee
    //                     </Link>
    //                   </li>
    //               </ul>
    //             </div>
    //         )
    // }

// Paste this below <div className="col-md-3 offset-md-1">{adminLeftSide()}</div>
// <div className="col-md-3 offset-md-1">{adminRightSide()}</div>

    return (
    <Base
    title="Welcome to the Admin Page" 
    description="Add the students / faculties / invitees details here"
    className= "container1"
    >
         <div className="row">
        <div className="col-md-3 offset-md-1">{adminLeftSide()}</div>
        
         
        
        </div>

    </Base>
    )

}


export default AdminDashBoard;

