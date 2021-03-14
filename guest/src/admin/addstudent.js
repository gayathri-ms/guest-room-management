import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import { isAuthenticated } from '../helper/adminapi';
import Base from '../core/Base';


const Addstudent=()=>{


    const [name,setName] = useState("")
    const [sid,setsid] = useState("")
    const [error , setError]= useState(false)

    const [success,setSuccess]=useState(false)

    // const {user, token}= isAuthenticated();
    const handleChange=(event)=>{
        //
        setError("");
        setName(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(false);

        //backend request fired
       Addstudent({name,sid})
       .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setName("");
                setsid("");

            }
        })
      

    }
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Student added successfully...!
                </h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to add student </h4>
        }
    };
    const studentForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Name</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder=
                "Name"/><br/><br/>
                <p className="lead">Student ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={sid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn btn-outline-info">Add Student</button>
            </div>
        </form>
    }

    
   
     
    return (
    <Base title =" Add Student Here"
        description="Add a new student"
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
};
export default Addstudent ;