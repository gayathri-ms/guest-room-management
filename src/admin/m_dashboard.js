import React from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
// import { isAuthenticated } from '../admin/helper/adminapi';

const DashBoard =()=>{

    const admin =()=>{
            //
            return (
              <div className="row3">
              <div className="column">
                <div className="card">
                  <h4 className="card-header text-white text-center">Dashboard</h4>
                  <ul className="list-group">
                      <li className="list-group-item">
                        <Link to="/admin/new_price" target="_self" className="nav-link text-dark">
                        Add New Price
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/add_sr" className="nav-link text-dark">
                        Add Staff
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/delete_sr" className="nav-link text-dark">
                        Delete Staff
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/v_name" className="nav-link text-dark">
                        Search Guests
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin/v_arrival" className="nav-link text-dark">
                        Search Arrivals
                        </Link>
                      </li>
                  </ul>
                </div>
                </div>
                <div className="column">
                </div>
                </div>
            )
    }


    return (
    <Base
    title="" 
    description=""
    className= "container1"
    >
         {admin()}

    </Base>
    )

}


export default DashBoard;

