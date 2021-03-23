import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { addinvitee } from '../admin/helper/adminapi';
import Base from '../core/Base';


const Addinvitee=()=>{

const [values,setValues]= useState({
        Name :"",
        Posn:"",
        Salary: "",
        success:"",
    })
    const {
            Name,
            Posn,
            Salary,
            error,
            success,
          } = values;

    const handleChange=name =>(event)=>{
          const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
    }
    const onSubmit=(event) => {
        event.preventDefault();
        setValues({...values, error: "",loading: true})
        if(addinvitee({Name,Posn,Salary})) {
              setValues({
              ...values,
              Name:"",
              Posn:"",
              Salary:"",
              loading: false,
              success: true,

            })
        }
    }

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Employee added successfully </h4>
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
                onChange={handleChange("Name")}
                value={Name}
                autoFocus
                required
                placeholder=
                "Employee Name"/><br/>

                 <p className="lead">Position</p>
                <select
                  onChange={handleChange("Posn")}
                   className="form-control my-3"
                >
                <option>Select</option>
                <option value = "Manager selected">Manager</option>
                <option value = "Receptionist">Receptionist</option>
                <option value = "Guard">Guard</option>
                <option value = "Housekeeping">Housekeeping</option>
                <option value = "Chef">Chef</option>
                <option value = "Kitchen">Kitchen</option>
                <option value = "Cashier">Cashier</option>
                </select>

                <p className="lead">Salary</p>
                <input type="number" className="form-control my-3"
                onChange={handleChange("Salary")}
                value={Salary}
                autoFocus
                required
                placeholder=
                "Salary"/>


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
