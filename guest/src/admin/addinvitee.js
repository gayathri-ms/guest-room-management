import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { addinvitee } from '../admin/helper/adminapi';
import Base from '../core/Base';


const Addinvitee=()=>{

const [values,setValues]= useState({
        name :"",
        Iid: "",
        error:"",
        success:"",
        formData:"",
    }) 
    const {
        name,
        Iid,
        error,
        success,
        formData
    } = values;

    const handleChange=name =>(event)=>{
          const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
    }
    const onSubmit=(event) => {
        //
        event.preventDefault();
        setValues({...values, error: "",loading: true})
        addinvitee(formData).then(data =>{
          if(data.error){
            setValues({...values, error : data.error})
          }else{
            setValues({
              ...values,
              name:"",
              Iid:"",
              loading: false,
              success: true,
              addinvitee: data.name
            })
          }
        })


    }
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Employee added successfully...!
                </h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to add the Employee </h4>
        }
    };
    const inviteeForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Name</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange("name")}
                value={name}
                autoFocus
                required
                placeholder=
                "Invitee Name"/><br/>
                <p className="lead">Invitee ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange("Iid")}
                value={Iid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button type="submit" onClick={onSubmit} className="btn1 btn-lg">Add Employee</button>
            </div>
        </form>
    }

   
     
    return (
    <Base title =" Add Employee Here"
        description="Add a new employee"
        className="container2"
        >
           <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {inviteeForm()}
                </div>
            </div>
           </div>
    </Base>

    )
    }

export default Addinvitee ;