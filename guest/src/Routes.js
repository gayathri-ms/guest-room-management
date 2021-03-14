import React from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Addstudent from './admin/addstudent';
import Addfaculty from './admin/addfaculty';
import Addinvitee from './admin/addinvitee';
// import Deletestudent from './admin/deletestudent';
// import Deletefaculty from './admin/deletefaculty';
// import Deleteinvitee from './admin/deleteinvitee';


// import AdminRoute from './auth/helper/AdminRoutes';
// import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from "./core/Home";
import AdminDashBoard from './admin/admindashboard';
import Reception from './admin/recdashboard';
 
              
             
   //paste this below <Route path= "/admin/recdashboard" exact component={Reception}/>          
             
// <Route path= "/deletestudent" exact component={Deletestudent}/> 
            // <Route path= "/deletefaculty" exact component={Deletefaculty}/> 
            // <Route path= "/deleteinvitee" exact component={Deleteinvitee}/>

const Routes=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path= "/admin/admindashboard" exact component={AdminDashBoard}/>
            <Route path= "/addstudent" exact component={Addstudent}/> 
            <Route path= "/addfaculty" exact component={Addfaculty}/> 
            <Route path= "/addinvitee" exact component={Addinvitee}/>
            <Route path= "/admin/recdashboard" exact component={Reception}/>
            
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;