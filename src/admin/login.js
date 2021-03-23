import React,{useState} from "react";
import Base from "../core/Base";
import {Link,Redirect} from "react-router-dom";
// import { Login,authentication,isAuthenticated} from '../admin/helper/adminapi';

const L_login=()=>{
    const [values,setValues]=useState({
 
        username:"abcdef",
        password:"123456789",
        error:"",
        loading:false,
        didRedirect: false,
      
    })
    const {username,password,error,loading,didRedirect}= values;

   // const {user}= isAuthenticated();


    const handleChange = name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }
    const onSubmit= event=>{
        // event.preventDefault()
        // setValues({...values,error: false,loading: true})
        // Login({username,password})
        // .then(data=>{
        //     if(data.err){
        //         setValues({...values,error: data.err ,loading: false})
        //     }
        //     else{
        //         authentication(data,()=>{
        //             setValues(
        //            {...values,
        //             username:"",
        //             password:"",
        //             error:"",
        //             didRedirect: true
        //            }
        //             )
        //         })

        //     }
        // })
        // .catch(console.log("Invalid username and password"))
        if(username=="gayathri" &&password=="987654321"){
           setValues(
                   {...values,
                    username:"",
                    password:"",
                    error:"",
                    didRedirect: true
                   })
        }
        else{
          setValues({...values,error: "Invalid username and password" ,loading: false})
          // console.log("Invalid username and password")
        }
    }
    const performRediret = () =>{
        if (didRedirect) {
            return <Redirect to="/admin/admindashboard" />;
        }
          
        // if(isAuthenticated()){
        //      return <Redirect to="/"></Redirect>;
        // }
    }

     const loadingMessage=()=>{
    return(  
        loading && (   
        <div className="alert alert-info">  
         loading....
         </div>
        ))

     }
     const errorMessage=()=>{
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className = "alert alert-danger"
        style={{display: error ?  "":"none"}
       }>
            {error}
       </div>
       </div>
       </div>)

    }




    const loginForm=()=>{
        return (
            <div className="row">
               <div className="col-md-6 offset-sm-3 text-left">
                   <form >

                      <div className="display-6 ">
                          <label className="text-dark">Username</label>
                        <input className="form-control my-3" onChange={handleChange("username")}  value={username}   type="text" />
                      </div>

                      <div className="display-6 from-group">
                          <label className="text-dark">Password</label>
                        <input className="form-control my-3" onChange={handleChange("password")}  value={password}   type="password" />
                      </div>

                       <button onClick={onSubmit} className="form-control btn1 btn-lg"> Submit </button>
                   </form>
               </div>

            </div>
        )
    }
    return (
        <Base
        title="Login Page"
        description="A page for admin to login"
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                     {
                         loadingMessage()
                     }
                     {
                          errorMessage()  
                     }
                     {   
                          loginForm()
                     }
                     {
                           performRediret()
                     }
                </div>
            </div>
           </div>
        </Base>
    )
}
 
export default L_login;