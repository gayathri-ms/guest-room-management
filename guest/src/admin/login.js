import React,{useState} from "react";
import Base from "../core/Base";
import {Link,Redirect} from "react-router-dom";

// import {login,authentication,isAuthenticated} from "../helper"
const login=()=>{
    const [values,setValues]=useState({
 
        username:"abcdef",
        password:"123456789",
        error:"",
        loading:false,
        didRedirect: false,
      
    })
    const {username,password,error,loading,didRedirect}= values;

  //  const {user}= isAuthenticated();


    const handleChange = name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }
    const onSubmit= event=>{
        event.preventDefault()
        setValues({...values,error: false,loading: true})
        login({username,password})
        .then(data=>{
            if(data.err){
                setValues({...values,error: data.err ,loading: false})
            }
            else{
                authentication(data,()=>{
                    setValues(
                   {...values,
                    username:"",
                    password:"",
                    error:"",
                    didRedirect: true
                   }
                    )
                })
            }
        })
        .catch(console.log("Invalid username and password"))
    }
    const performRediret = () =>{
          
        if(isAuthenticated()){
            return <Redirect to="../admin/admindashboard" />
        }
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

                      <div className="display-5 form-group">
                          <label className="text-light">Username</label>
                        <input className="form-control" onChange={handleChange("username")}  value={username}   type="text" />
                      </div>

                      <div className="display-5 form-group">
                          <label className="text-light">Password</label>
                        <input className="form-control" onChange={handleChange("password")}  value={password}   type="password" />
                      </div>

                       <button onClick={onSubmit} className="form-control btn btn-success btn-block"> Submit </button>
                   </form>
               </div>

            </div>
        )
    }
    return (
        <Base title="Login page" description="A page for user to login">
        <h1>
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
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </h1>
        </Base>
    )
}
 
export default login;