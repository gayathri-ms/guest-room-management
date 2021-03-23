import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { deletefaculty} from '../admin/helper/adminapi';



const Deletefaculty=()=>{
			const [values,setValues]= useState({
					Id :"",
				 error:"",
				 success:"",
			})
			const {
				 Id,
				 error,
				 success,
			} = values;

    const handleChange=name=>(event)=>{
				const value = event.target.value ;
	  		setValues({...values ,[name]: value})
    }

    const onSubmit=(event)=>{
        event.preventDefault();

        //backend request fired
            if(deletefaculty({Id})){
							setValues({...values, Id: "", success: true})
            }
        }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete faculty </h4>
        }
    };

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Faculty deleted successfully</h4>
        }
    }

    const facultyForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Faculty ID</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Id")}
                value={Id}
                autoFocus
                required
                placeholder=
                "ID"/>

            <button onClick={onSubmit} className="btn1 btn-lg">Delete Faculty</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Faculty Here"
        description="Delete a Faculty Entry"
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
export default Deletefaculty ;
