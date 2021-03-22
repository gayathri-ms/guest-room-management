import React from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Addstudent from './admin/addstudent';
import Addfaculty from './admin/addfaculty';
import Addinvitee from './admin/addinvitee';
import Deletestudent from './admin/deletestudent';
import Deletefaculty from './admin/deletefaculty';
import Deleteinvitee from './admin/deleteinvitee';


import Home from "./core/Home";
import AdminDashBoard from './admin/admindashboard';
import Reception from './admin/recdashboard';
import New_price from './admin/new_price';
import L_login from './admin/login';
import M_login from './admin/m_login';  
import Dashboard from './admin/m_dashboard';
import Add_sr from './admin/add_sr';
import Delete_sr from './admin/delete_sr';
import View_name from './admin/v_name';
import View_arrival from './admin/v_arrival';





const Routes=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path= "/admin/admindashboard" exact component={AdminDashBoard}/>
            <Route path= "/admin/addstudent" exact component={Addstudent}/> 
            <Route path= "/admin/addfaculty" exact component={Addfaculty}/> 
            <Route path= "/admin/addinvitee" exact component={Addinvitee}/>
            
            <Route path= "/admin/deleteinvitee" exact component={Deleteinvitee}/> 
            <Route path= "/admin/deletestudent" exact component={Deletestudent}/> 
            <Route path= "/admin/deletefaculty" exact component={Deletefaculty}/> 
            <Route path= "/admin/new_price" exact component={New_price}/> 
            <Route path= "/admin/m_login" exact component={M_login}/> 
            <Route path= "/admin/login" exact component={L_login}/>
            <Route path= "/admin/m_dashboard" exact component={Dashboard}/>
            <Route path= "/admin/add_sr" exact component={Add_sr}/>
            <Route path= "/admin/delete_sr" exact component={Delete_sr}/>
            <Route path= "/admin/recdashboard" exact component={Reception}/>
            <Route path= "/admin/v_arrival" exact component={View_arrival}/>
            <Route path= "/admin/v_name" exact component={View_name}/>


        </Switch>
        </BrowserRouter>
    );
}
export default Routes;