import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { deleteinvitee} from '../admin/helper/adminapi';



const Deleteinvitee=()=>{
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
            if(deleteinvitee({Id})){
							setValues({...values, Id: "", success: true})
            }
        }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete Employee </h4>
        }
    };

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Employee deleted successfully</h4>
        }
    }

    const inviteeForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Employee ID</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("Id")}
                value={Id}
                autoFocus
                required
                placeholder=
                "ID"/>

            <button onClick={onSubmit} className="btn1 btn-lg">Delete Employee</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Employee"
        description="Delete an Employee Record"
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
export default Deleteinvitee;
