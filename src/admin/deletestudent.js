import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { deletestudent } from '../admin/helper/adminapi';
import Base from '../core/Base';


const Deletestudent=()=>{

		const [values,setValues]= useState({
        Id:"",
				didRedirect:"",
        error:"",
        success:"",
        // formData:"",
    })
		const temp = "Successful";
    const {
        Id,
        didRedirect,
        error,
        success,
        // formData
    } = values;


    const handleChange=name =>(event)=> {
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


        if(deletestudent({Id})) {
              setValues({
              ...values,
              Name:"",
              Branch:"",
              loading: false,

            })
        }
    };

    //     } else {
		// 			setValues({
		// 					...values,
		// 					Id:"",
		// 					error: true,
		// 			})
		// 		}
		// }

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Student deleted successfully</h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to delete student </h4>
        }
    };
    const studentForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Student ID</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Id")}
                value={Id}
                autoFocus
                required
                placeholder=
                "ID"/><br/>


            <button type="submit" onClick={onSubmit} className="btn1 btn-lg">Delete Student</button>
            </div>
        </form>
    }




    return (
		// <p classname = "text-dark">
    <Base title =" Delete Student Here"
        description="Delete a student"
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

export default Deletestudent ;
