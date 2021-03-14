import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import { isAuthenticated } from '../helper/adminapi';
import Base from '../core/Base';


const Addfaculty=()=>{


    const [name,setName] = useState("")
    const [fid,setfid] = useState("")
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
        Addfaculty({name,fid})
        .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setName("");
                setfid("");

            }
        })
      

    }
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Faculty added successfully...!
                </h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to add faculty </h4>
        }
    };
    const facultyForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Name</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder=
                "Faculty Name"/><br/><br/>
                <p className="lead">Faculty ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={fid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn btn-outline-info">Add Faculty</button>
            </div>
        </form>
    }

   
   
     
    return (
    <Base title =" Add Faculty Here"
        description="Add a new faculty"
        className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {facultyForm()}
                </div>
            </div>
    </Base>

    )
    }

export default Addfaculty ;