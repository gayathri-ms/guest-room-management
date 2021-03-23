import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { addstudent } from '../admin/helper/adminapi';
import Base from '../core/Base';


const Addstudent=()=>{

    const [values,setValues]= useState({
        Name :"",
        Branch: "",
        error:"",
        success:"",
        // formData:"",
    })
    const {
        Name,
        Branch,
        error,
        success,
        // formData
    } = values;


    const handleChange=name =>(event)=>{
          const value = event.target.value ;
          // formData.set(name,value);
          setValues({...values ,[name]: value})
    }
    // const onSubmit=(event) => {
    //     console.log("onsubmit");
    //     event.preventDefault();
    //     setValues({...values, error: ""})
    //     addstudent({Name,Branch}).then(data =>{
    //         console.log("data",data);
    //       // if(data.error){
    //       //   setValues({...values, error : data.error})
    //       // }else{
    //         setValues({
    //           ...values,
    //           Name:"",
    //           Branch:"",
    //           loading: false,
    //           success: true,
    //
    //         })
    //     })
    //
    //
    // }
    const onSubmit=(event) => {
        console.log("onsubmit");
        event.preventDefault();
        setValues({...values, error: ""})


        if(addstudent({Name,Branch})) {
              setValues({
              ...values,
              Name:"",
              Branch:"",
              loading: false,
              success: true,

            })
        }
    };
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Student added successfully</h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to add student </h4>
        }
    };
    const studentForm =()=>{
      return( <form>
            <div className="form-group">
                <p className="lead">Name</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Name")}
                value={Name}
                autoFocus
                required
                placeholder=
                "Name"/><br/>
                <p className="lead">Branch</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Branch")}
                value={Branch}
                autoFocus
                required
                placeholder=
                "Branch Name"/>

            <button type="submit" onClick={onSubmit} className="btn1 btn-lg">Add Student</button>
            </div>
        </form>)
    }




    return (
    <Base title =" Add Student Here"
        description="Add a new student"
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {studentForm()}


                </div>
            </div>
           </div>

    </Base>

    )
}

export default Addstudent ;
