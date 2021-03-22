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
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link style={currentTab(history,"/")} className="nav-link" to="/">
                        Home
                    </Link>
                </li>

                
                <li  className="nav-item">
                    <Link  style={currentTab(history,"/admin/login")} className="nav-link" to="/admin/login">
                       Admin
                    </Link>

                </li>
                
                <li  className="nav-item">
                    <Link  style={currentTab(history,"/admin/recdashboard")} className="nav-link" to="/admin/recdashboard">
                       Reception
                    </Link>

                </li>

                <li  className="nav-item">
                    <Link  style={currentTab(history,"/admin/m_login")} className="nav-link" to="/admin/m_login">
                       Manager
                    </Link>

                </li>



            </ul>

        </div>
    )
}


export default withRouter(Menu);