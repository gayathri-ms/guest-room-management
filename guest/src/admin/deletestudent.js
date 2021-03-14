import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { deletestudent} from './helper/adminapi';



const Deletestudent=()=>{
	 const [Sid,setSid]= useState();
   
	 const delete_student =sid =>{


        deletestudent(sid).then(data =>  {
            if(data.error){
                console.log(data.error);
            }
            else{
            	setSid(sid)
            }
        })
    }

     const handleChange=(event)=>{
        //
        setError("");
        setSid(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(true);

        //backend request fired
          Deletestudent({sid})
          .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setSid("");

            }
        })
      

    }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete student </h4>
        }
    };
    
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Student deleted successfully...!
                </h4>
        }
     }

    const studentForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Student ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={Sid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn btn-outline-info">Delete Student</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Student Here"
        description="Delete a student"
        className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {studentForm()}

                </div>
            </div>
    </Base>

    )
 
}
export default Deletestudent ;
