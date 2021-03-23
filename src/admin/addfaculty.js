import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { addfaculty} from '../admin/helper/adminapi';;
// import Base from '../core/Base';


const Addfaculty=()=>{

const [values,setValues]= useState({
        Name:"",
        Dept: "",
        error:"",
        success:"",
        // formData:"",
    })
    const {
        Name,
        Dept,
        error,
        success,
    } = values;

    const handleChange=name =>(event)=>{
          const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
    }
    const onSubmit=(event) => {
        console.log("onsubmit");
        event.preventDefault();
        setValues({...values, error: ""})


        if(addfaculty({Name,Dept})) {
              setValues({
              ...values,
              Name:"",
              Dept:"",
              loading: false,
              success: true,

            })
        }
    };

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Faculty added successfully</h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to add faculty </h4>
        }
    };
    const facultyForm =()=>{
      return ( <form>
            <div className="form-group">
                <p className="lead">Name</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Name")}
                value={Name}
                autoFocus
                required
                placeholder=
                "Faculty Name"/><br/>
                <p className="lead">Department</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Dept")}
                value={Dept}
                autoFocus
                required
                placeholder=
                "Department"/>

            <button type="submit" onClick={onSubmit} className="btn1 btn-lg">Add Faculty</button>
            </div>
        </form>)
    }




    return (
    <Base title =" Add Faculty Here"
        description="Add a new faculty"
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {facultyForm()}
                </div>
            </div>
          </div>
    </Base>

    )
}

export default Addfaculty ;
