import React,{Fragment} from 'react';
import {Link ,withRouter} from "react-router-dom"
import {isAuthenticated} from "../admin/helper/adminapi"


const currentTab=(history, path)=>{
    if(history.location.pathname===path){
        return {color:"#6EC72D"}

    }
    else{
        return {color:"#FFFFFF"}
    }
}
const Menu=({history})=>{
    return(
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={currentTab(history,"/")} className="nav-link" to="/">
                        Home
                    </Link>
                </li>

                {isAuthenticated() && (
                <li  className="nav-item">
                    <Link  style={currentTab(history,"/admin/admindashboard")} className="nav-link" to="/admin/admindashboard">
                       Admin
                    </Link>

                </li>
                )}

                {isAuthenticated() && (
                <li  className="nav-item">
                    <Link  style={currentTab(history,"/admin/recdashboard")} className="nav-link" to="/admin/recdashboard">
                       Receptionist
                    </Link>

                </li>

                )}

            {!isAuthenticated() && (
                <Fragment>
                   <li className="nav-item">
                   <Link className="nav-link"
                    style={currentTab(history, '/signup')}
                    to="/signup"
                   > Sign Up
                   </Link>
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link"
                    style={currentTab(history, '/login')}
                    to="/login"
                   > Login In
                   </Link>
                   </li>
                </Fragment>
            )}

            </ul>

        </div>
    )
}


export default withRouter(Menu);